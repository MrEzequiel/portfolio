import type { NextPage } from 'next'
import AboutMe from '../components/HomeSections/AboutMe'
import Introduction from '../components/HomeSections/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <AboutMe />
    </>
  )
}

export default Home
