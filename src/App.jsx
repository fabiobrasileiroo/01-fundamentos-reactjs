import "./global.css"
import { Post } from "./Post"
import { Header } from "./components/Header"
function App() {

  return (
    <>
      <Header/>
      <Post author="Fabio Brasileiro" content="lorem mais facil eba" />

      <Post author="Xuxu" content="Que show da xuxu é esse" />
    </>
  )
}

export default App
