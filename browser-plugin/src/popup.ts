const scanBtn = document.getElementById('scan')!;
const clearBtn = document.getElementById('clear')!;
const contentEl = document.getElementById('content')!;

function showStatus(icon: string, text: string): void {
  contentEl.innerHTML = `<div class="status"><div class="icon">${icon}</div><div>${text}</div></div>`;
}

function escapeHtml(s: string): string {
  const el = document.createElement('span');
  el.textContent = s;
  return el.innerHTML;
}

async function getActiveTab(): Promise<chrome.tabs.Tab | null> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab ?? null;
}

async function injectContentScript(tabId: number): Promise<void> {
  await chrome.scripting.executeScript({
    target: { tabId },
    files: ['content.js'],
  });
}

scanBtn.addEventListener('click', async () => {
  showStatus('⏳', 'Scanning…');

  const tab = await getActiveTab();
  if (!tab?.id) {
    showStatus('⚠️', 'No active tab found.');
    return;
  }

  try {
    // Inject content script (idempotent — listener won't double-register
    // because we check message type)
    await injectContentScript(tab.id);
  } catch {
    // May fail on chrome:// pages etc
    showStatus('⚠️', 'Cannot scan this page.<br/>Extension pages and browser internals are restricted.');
    return;
  }

  chrome.tabs.sendMessage(tab.id, { type: 'scan' }, (response) => {
    if (chrome.runtime.lastError || !response) {
      showStatus('⚠️', 'Could not connect to page.<br/>Try reloading the tab.');
      return;
    }

    renderResults(response);
  });
});

clearBtn.addEventListener('click', async () => {
  const tab = await getActiveTab();
  if (!tab?.id) return;
  chrome.tabs.sendMessage(tab.id, { type: 'clear' });
  showStatus('🔍', 'Overlays cleared.<br/>Click <b>Scan</b> to re-check.');
});

interface ScanResponse {
  elements: number;
  errors: number;
  warnings: number;
  results: Array<{
    selector: string;
    tagName: string;
    violations: Array<{
      category: string;
      message: string;
      severity: 'error' | 'warning';
    }>;
  }>;
}

function renderResults(data: ScanResponse): void {
  let html = '<div class="summary">';

  if (data.errors === 0 && data.warnings === 0) {
    html += '<span class="badge badge-pass">All clear — no violations</span>';
  } else {
    if (data.errors > 0) html += `<span class="badge badge-error">${data.errors} error${data.errors !== 1 ? 's' : ''}</span>`;
    if (data.warnings > 0) html += `<span class="badge badge-warning">${data.warnings} warning${data.warnings !== 1 ? 's' : ''}</span>`;
  }
  html += `<span class="badge badge-info">${data.elements} element${data.elements !== 1 ? 's' : ''}</span>`;
  html += '</div>';

  if (data.results.length > 0) {
    html += '<div class="results">';
    for (const r of data.results) {
      html += `<div class="result-row">`;
      html += `<div class="tag">&lt;${r.tagName}&gt;</div>`;
      html += `<div class="selector">${escapeHtml(r.selector)}</div>`;
      html += `<div class="msgs">`;
      for (const v of r.violations) {
        const cls = v.severity === 'error' ? 'err' : 'warn';
        const dot = v.severity === 'error' ? '●' : '◐';
        html += `<div class="${cls}">${dot} ${escapeHtml(v.message)}</div>`;
      }
      html += '</div></div>';
    }
    html += '</div>';
  }

  contentEl.innerHTML = html;
}
