/** @jsx jsx */
import { jsx } from '@emotion/core'
import dynamic from 'next/dynamic'
import Loading from '@components/Loading'
const Home = dynamic(() => import('@components/Home'), {
  loading: () => <Loading />,
  ssr: false,
})

const Index = () => {
  return (
    <>
      <Home />
    </>
  )
}

export default Index
