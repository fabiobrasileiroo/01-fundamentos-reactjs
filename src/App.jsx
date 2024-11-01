import "./global.css"
import styles from "./App.module.css"

import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/fabiobrasileiroo.png',
      name: 'Fábio Brasileiro',
      role: 'Full stack developer'
    },
    content: [
      {type: 'paragraph',content: 'Fala galeraaa'},
      {type: 'paragraph',content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto novo'},
      {type: 'link',content: 'jane.design/doctorcare'},
    ],
    publicshedAt: new Date('2024-09-30 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/fabiobrasileiroo.png',
      name: 'Fábio Brasileiro',
      role: 'Full stack developer Senior'
    },
    content: [
      {type: 'paragraph',content: 'Fala galeraaa'},
      {type: 'paragraph',content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto novo'},
      {type: 'link',content: 'jane.design/doctorcare'},
    ],
    publicshedAt: new Date('2024-09-30 20:00:00')
  },
]
function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <SideBar/>
        </aside>
        <main>
          <Post 
            author="Fabio Brasileiro"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis magni deleniti nesciunt incidunt hic saepe, quae adipisci dicta praesentium eos ea earum veritatis error assumenda minus iste vero ut ipsa!"
          />

          <Post 
            author="João"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis magni deleniti nesciunt incidunt hic saepe, quae adipisci dicta praesentium eos ea earum veritatis error assumenda minus iste vero ut ipsa!"
          />
        </main>
      </div>
    </>
  )
}

export default App
