import Post from '../Post/Post'
import './Feed.css'

export default function Feed({ posts, onOpen }){
  return (
    <main className="ig-feed">
      {posts.length === 0 && <div className="loading">Cargando publicaciones...</div>}
      {posts.map((p) => (
        <Post key={p.id} post={p} onOpen={() => onOpen(p)} />
      ))}
    </main>
  )
}
