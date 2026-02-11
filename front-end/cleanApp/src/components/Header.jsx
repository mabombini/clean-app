import '../styles.css'

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button className="menu-btn" onClick={onMenuClick}>
        ☰
      </button>

      <div className="header-right">
        <span className="icon">🔔</span>
        <span className="icon">✉️</span>

        <div className="business">
          <span>Business Name</span>
          <span className="chevron">▾</span>
        </div>
      </div>
    </header>
  );
}
