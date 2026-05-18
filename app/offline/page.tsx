export default function OfflinePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: '#fff',
        fontFamily: 'inherit',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '420px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 2rem',
            opacity: 0.6,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3l18 18M10.584 10.587a2 2 0 002.828 2.83M5.106 5.107A9.965 9.965 0 002 12c0 5.523 4.477 10 10 10a9.965 9.965 0 006.894-2.768M9.363 4.135A9.964 9.964 0 0112 4c5.523 0 10 4.477 10 10 0 .836-.1 1.65-.29 2.43"
            />
          </svg>
        </div>
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          You&apos;re offline
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.6',
            marginBottom: '2rem',
            fontSize: '0.95rem',
          }}
        >
          Check your connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: '#fff',
            color: '#000',
            border: 'none',
            padding: '0.7rem 1.6rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}
        >
          Retry
        </button>
      </div>
    </main>
  );
}
