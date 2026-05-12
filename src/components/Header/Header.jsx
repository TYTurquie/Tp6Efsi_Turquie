import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="ig-header">
      <div className="ig-header__left">
        <Link to="/" className="ig-logo">Gatogram</Link>
      </div>
      <div className="ig-header__center">
        <input className="ig-search" placeholder="Buscar" />
      </div>
      <div className="ig-header__right">
        <Link to="/">Feed</Link>
        <Link to="/profile">Perfil</Link>
      </div>
    </header>
  )
}
