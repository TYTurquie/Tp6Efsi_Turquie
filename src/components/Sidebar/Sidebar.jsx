import './Sidebar.css'

export default function Sidebar({ user }){
  return (
    <aside className="ig-sidebar">
      <div className="ig-profile-compact">
        <img src={user.avatar} alt="avatar" />
        <div>
          <strong>{user.username}</strong>
          <div className="muted">{user.name}</div>
        </div>
      </div>
      <div className="ig-sidebar__stats">
        <div><strong>{user.posts}</strong><div className="muted">Publicaciones</div></div>
        <div><strong>{user.followers}</strong><div className="muted">Seguidores</div></div>
        <div><strong>{user.following}</strong><div className="muted">Siguiendo</div></div>
      </div>
    </aside>
  )
}
