import './Profile.css'

export default function Profile({ user, posts }){
  const userPosts = posts.filter(p=>p.username === user.username)
  return (
    <section className="ig-profile">
      <div className="profile-top">
        <img className="avatar-large" src={user.avatar} alt="avatar" />
        <div>
          <div className="profile-row">
            <h2>{user.username}</h2>
            <button className="btn-edit">Editar perfil</button>
          </div>
          <div className="muted">{user.followers} seguidores • {user.following} siguiendo</div>
          <p className="bio">{user.bio}</p>
        </div>
      </div>
      <div className="profile-posts">
        {userPosts.length === 0 && <div className="muted">No hay publicaciones de este usuario en el feed.</div>}
        <div className="grid">
          {userPosts.map(p=> (
            <img key={p.id} src={p.image} alt={p.caption} />
          ))}
        </div>
      </div>
    </section>
  )
}
