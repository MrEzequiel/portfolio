import type { GetStaticProps, NextPage } from 'next'
import AboutMe from '../components/HomeSections/AboutMe'
import Introduction from '../components/HomeSections/Introduction'
import Knowledge from '../components/HomeSections/Knowledge'
import Projects from '../components/HomeSections/Projects'

import supabase from '../services/supabase'

import IKnowledge from '../interfaces/IKnowledge'
import IFormation from '../interfaces/IFormation'
import Formation from '../components/HomeSections/Formation'

export const getStaticProps: GetStaticProps = async () => {
  const { data: knowledge } = await supabase.from('knowledge').select('*')
  let { data: formations } = await supabase.from('formation').select('*')

  return {
    props: {
      knowledge,
      formations
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

interface HomeProps {
  knowledge: IKnowledge[]
  formations: IFormation[]
}

const Home: NextPage<HomeProps> = ({ knowledge, formations }) => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Projects />
      <Knowledge knowledge={knowledge} />
      <Formation formations={formations} />
    </>
  )
}

export default Home
