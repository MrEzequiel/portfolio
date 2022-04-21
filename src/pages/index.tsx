import type { NextPage } from 'next'
import AboutMe from '../components/HomeSections/AboutMe'
import Introduction from '../components/HomeSections/Introduction'
import Projects from '../components/HomeSections/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Projects />
    </>
  )
}

export default Home
