import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './SideBar.module.css'

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.conver}
        src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className={styles.profile}>
        <Avatar 
          className={styles.profile}
          src="https://avatars.githubusercontent.com/u/99563281?v=4"
        />
        {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/99563281?v=4" /> */}
        <strong>Fabio Brasileiro</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}