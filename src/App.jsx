import "./global.css"
import styles from "./App.module.css"

import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar"
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
