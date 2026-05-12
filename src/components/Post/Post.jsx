import { useState } from 'react'
import './Post.css'

export default function Post({ post, onOpen }){
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  function toggleLike(e){
    e.stopPropagation()
    setLiked((s)=>{
      const newS = !s
      setLikes((l)=> newS ? l+1 : l-1)
      return newS
    })
  }

  return (
    <article className="ig-post" onClick={onOpen}>
      <header className="post-header">
        <img src={post.avatar} alt="avatar" />
        <div>
          <strong>{post.username}</strong>
          <div className="muted small">{post.date}</div>
        </div>
      </header>
      <div className="post-media">
        <img src={post.image} alt={post.caption} />
      </div>
      <div className="post-actions">
        <button className={`like-btn ${liked ? 'liked':''}`} onClick={toggleLike}>❤</button>
        <div className="likes">{likes} Me gusta</div>
      </div>
      <div className="post-caption"><strong>{post.username}</strong> {post.caption}</div>
    </article>
  )
}
