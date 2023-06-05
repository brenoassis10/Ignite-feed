import { Header } from './components/header';
import { Post } from './components/post'
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brenoassis10.png',
      name: 'Breno Assis',
      role: 'Developer web '
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa'},
      {type: 'paragraph', content:'cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:' breno.design/doctorcare '},
    ],

    publishedAt:new Date('2023-04-01 11:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat '
    },
    content: [
      {type: 'paragraph', content:'Muito maneiro Breno!!'},
      {type: 'paragraph', content:'Bora que foguete nao tem ré🚀'},
      {type: 'link', content:' Diego.CTO/Rocketseat '},
    ],

    publishedAt:new Date('2023-04-01 21:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map(post =>{
          return (
             <Post
             key={post.id}
             author={post.author}
             content={post.content}
             publishedAt={post.publishedAt}
             
            />
          )
         })}
        </main>
      </div>
    </div>
  )

}
export default App
