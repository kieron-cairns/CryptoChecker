import { useRouter } from 'next/router'
import Link from 'next/link'
import LayoutDesktop from '../../../components/LayoutDesktop'


const Page = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      {/* <LayoutDesktop /> */}
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/page/[id]/[content]" as={`/page/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/page/[id]/[content]" as={`/page/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Page
