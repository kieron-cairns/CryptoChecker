import { useRouter } from 'next/router'
import LayoutDesktop from '../../../components/LayoutDesktop'

const Test = () => {

    const router = useRouter()
    const { id, content } = router.query

    return(
      <div>
        <h1>Post</h1>
        <h1>Comment: </h1>
      </div>
    )
  }



const Content = () => (
//   const router = useRouter()
//   const { id, content } = router.query


    <div>
        <LayoutDesktop><Test></Test></LayoutDesktop>
    </div>
  )



export default Content
