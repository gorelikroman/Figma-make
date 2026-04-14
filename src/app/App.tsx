import React from 'react';

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--mapped-surface-background)' }}>
      {/* Your app content goes here */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 
          style={{
            fontFamily: 'var(--text-h1-family)',
            fontSize: 'var(--text-h1-size)',
            fontWeight: 'var(--text-h1-weight)',
            lineHeight: 'var(--text-h1-line-height)',
            color: 'var(--mapped-text-primary)',
            marginBottom: '1rem'
          }}
        >
          Welcome to Your Project
        </h1>
        
        <p 
          style={{
            fontFamily: 'var(--text-body-lg-family)',
            fontSize: 'var(--text-body-lg-size)',
            fontWeight: 'var(--text-body-lg-weight)',
            lineHeight: 'var(--text-body-lg-line-height)',
            color: 'var(--mapped-text-secondary)'
          }}
        >
          Start building your application using the complete UI Kit design system.
        </p>
      </div>
    </div>
  );
}

export default App;
