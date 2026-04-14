interface Violation {
  nodeId: string;
  nodeName: string;
  category: string;
  message: string;
  severity: 'error' | 'warning';
}

let allViolations: Violation[] = [];
let hasSelection = false;
let activeFilter: string | null = null;

// ── DOM refs ────────────────────────────────────────────────────────

const summaryEl = document.getElementById('summary')!;
const filtersEl = document.getElementById('filters')!;
const resultsEl = document.getElementById('results')!;
const runBtn = document.getElementById('run')!;

// ── Render ──────────────────────────────────────────────────────────

function render(): void {
  // No selection state
  if (!hasSelection) {
    summaryEl.innerHTML = '';
    filtersEl.innerHTML = '';
    resultsEl.innerHTML = '<div class="empty"><div class="check">☝</div>Select a frame to lint.<br/>The plugin checks only the selected frame.</div>';
    return;
  }

  const filtered = activeFilter
    ? allViolations.filter((v) => v.category === activeFilter)
    : allViolations;

  const errorCount = allViolations.filter((v) => v.severity === 'error').length;
  const warnCount = allViolations.filter((v) => v.severity === 'warning').length;

  // Summary badges
  if (allViolations.length === 0) {
    summaryEl.innerHTML = '<span class="badge badge-pass">All clear — no violations found</span>';
  } else {
    summaryEl.innerHTML = [
      errorCount > 0 ? `<span class="badge badge-error">${errorCount} error${errorCount !== 1 ? 's' : ''}</span>` : '',
      warnCount > 0 ? `<span class="badge badge-warning">${warnCount} warning${warnCount !== 1 ? 's' : ''}</span>` : '',
    ].join('');
  }

  // Filter chips
  const categories = [...new Set(allViolations.map((v) => v.category))];
  filtersEl.innerHTML = `<span class="filter-chip ${!activeFilter ? 'active' : ''}" data-cat="">All</span>` +
    categories.map((cat) => {
      const count = allViolations.filter((v) => v.category === cat).length;
      return `<span class="filter-chip ${activeFilter === cat ? 'active' : ''}" data-cat="${cat}">${cat} (${count})</span>`;
    }).join('');

  // Results list
  if (filtered.length === 0) {
    resultsEl.innerHTML = allViolations.length === 0
      ? '<div class="empty"><div class="check">✓</div>No design system violations detected.</div>'
      : '<div class="empty">No violations in this category.</div>';
    return;
  }

  resultsEl.innerHTML = filtered.map((v) => `
    <div class="violation" data-node="${v.nodeId}">
      <div class="icon icon-${v.severity}"></div>
      <div class="detail">
        <div class="node-name">${escapeHtml(v.nodeName)}</div>
        <div class="msg">${escapeHtml(v.message)}</div>
        <div class="cat">${v.category}</div>
      </div>
    </div>
  `).join('');
}

function escapeHtml(s: string): string {
  const el = document.createElement('span');
  el.textContent = s;
  return el.innerHTML;
}

// ── Events ──────────────────────────────────────────────────────────

runBtn.addEventListener('click', () => {
  parent.postMessage({ pluginMessage: { type: 'run-lint' } }, '*');
});

filtersEl.addEventListener('click', (e) => {
  const target = (e.target as HTMLElement).closest('.filter-chip') as HTMLElement | null;
  if (!target) return;
  const cat = target.dataset.cat || null;
  activeFilter = cat || null;
  render();
});

resultsEl.addEventListener('click', (e) => {
  const target = (e.target as HTMLElement).closest('.violation') as HTMLElement | null;
  if (!target) return;
  const nodeId = target.dataset.node;
  if (nodeId) {
    parent.postMessage({ pluginMessage: { type: 'select-node', nodeId } }, '*');
  }
});

// ── Listen for messages from plugin code ────────────────────────────

window.onmessage = (event) => {
  const msg = event.data.pluginMessage;
  if (!msg) return;

  if (msg.type === 'lint-results') {
    allViolations = msg.violations || [];
    hasSelection = msg.hasSelection ?? false;
    activeFilter = null;
    render();
  }
};
