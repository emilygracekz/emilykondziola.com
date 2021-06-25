/** @jsx jsx */
import { jsx } from '@emotion/core'
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('@components/Home'), {
  loading: () => <p>hey lol</p>,
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
