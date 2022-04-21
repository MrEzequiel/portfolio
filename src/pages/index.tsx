import type { GetStaticProps, NextPage } from 'next'
import AboutMe from '../components/HomeSections/AboutMe'
import Introduction from '../components/HomeSections/Introduction'
import Knowledge from '../components/HomeSections/Knowledge'
import Projects from '../components/HomeSections/Projects'

import supabase from '../services/supabase'

import IKnowledge from '../interfaces/IKnowledge'

export const getStaticProps: GetStaticProps = async () => {
  const { data: knowledge } = await supabase.from('knowledge').select('*')

  return {
    props: {
      knowledge
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

interface HomeProps {
  knowledge: IKnowledge[]
}

const Home: NextPage<HomeProps> = ({ knowledge }) => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Projects />
      <Knowledge knowledge={knowledge} />
    </>
  )
}

export default Home
