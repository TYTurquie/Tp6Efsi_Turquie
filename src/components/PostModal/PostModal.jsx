import './PostModal.css'

export default function PostModal({ post, onClose }){
  if(!post) return null
  return (
    <div className="ig-modal" onClick={onClose}>
      <div className="ig-modal__dialog" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-media">
          <img src={post.image} alt={post.caption} />
        </div>
        <div className="modal-info">
          <header className="post-header">
            <img src={post.avatar} alt="avatar" />
            <div>
              <strong>{post.username}</strong>
              <div className="muted small">{post.date}</div>
            </div>
          </header>
          <div className="modal-body">
            <p><strong>{post.username}</strong> {post.caption}</p>
            <p className="muted">{post.likes} Me gusta • {post.comments.length} comentarios</p>
            <div className="comments">
              {post.comments.map((c,i)=> (
                <div key={i}><strong>{c.user}</strong> {c.text}</div>
              ))}
            </div>
          </div>
          <div className="modal-actions">
            <button className="btn-close" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
