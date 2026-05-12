import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
import PostModal from './components/PostModal/PostModal'
import { fetchCats } from './services/api'
import userData from './data/user'
import './index.css'

function enrichPosts(catData, count = 12){
  const usernames = ['mi_gatito','luna','felix','misi','gatito_123','princesa','tigre','milo','nube','oreo','loki','sombra']
  const captions = [
    'Un día más de aventuras felinas 🐾',
    'Siesta programada',
    'Atrapé un rayo de sol',
    '¿Quién dijo comida?',
    'Explorando nuevos rincones',
  ]

  return catData.map((c, i)=>({
    id: c.id,
    image: c.url,
    username: usernames[i % usernames.length],
    avatar: `https://i.pravatar.cc/150?img=${(i%70)+1}`,
    caption: captions[i % captions.length],
    likes: Math.floor(Math.random()*1200)+20,
    comments: [
      { user: 'amante_gatos', text: '¡Qué lindo!'},
      { user: 'gatofeliz', text: '😍😍' }
    ],
    date: `${Math.floor(Math.random()*10)+1}d`
  }))
}

function App(){
  const [posts, setPosts] = useState([])
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let mounted = true
    async function load(){
      setLoading(true)
      const cats = await fetchCats(12)
      const enriched = enrichPosts(cats)
      if(mounted){
        setPosts(enriched)
        // update user posts count
        // eslint-disable-next-line no-unused-vars
        userData.posts = enriched.filter(p=>p.username===userData.username).length
        setLoading(false)
      }
    }
    load()
    return ()=> mounted = false
  }, [])

  function openPost(post){
    setSelected(post)
  }

  function closeModal(){
    setSelected(null)
  }

  return (
    <BrowserRouter>
      <Header />
      <div className="ig-app">
        <div className="ig-main">
          <Routes>
            <Route path="/" element={<Feed posts={posts} onOpen={openPost} />} />
            <Route path="/profile" element={<Profile user={userData} posts={posts} />} />
          </Routes>
        </div>
        <aside className="ig-side">
          <Sidebar user={userData} />
        </aside>
      </div>
      {selected && <PostModal post={selected} onClose={closeModal} />}
    </BrowserRouter>
  )
}

export default App
