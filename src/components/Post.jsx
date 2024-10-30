import styles from './Post.module.css'
export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/fabiobrasileiroo.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Fábio Brasieleiro</strong>
            <span>Full stack Depelover</span>
          </div>
        </div>
        <time dateTime="2024-05-11 08:13:30">Publicando há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento</p>
        <p><a href="">jane.desing/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a> {' '}
          <a>#nlw</a>{' '}
          <a>#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentario'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}