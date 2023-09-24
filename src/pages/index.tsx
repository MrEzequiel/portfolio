import type { GetStaticProps, NextPage } from 'next'
import AboutMe from '../components/HomeSections/AboutMe'
import Introduction from '../components/HomeSections/Introduction'
import Knowledge from '../components/HomeSections/Knowledge'
import Projects from '../components/HomeSections/Projects'

import supabase from '../services/supabase'

import IKnowledge from '../interfaces/IKnowledge'
import IFormation from '../interfaces/IFormation'
import Formation from '../components/HomeSections/Formation'
import Experience from '../components/HomeSections/Experience'
import IExperience from '../interfaces/IExperience'

export const getStaticProps: GetStaticProps = async () => {
  const { data: knowledge } = await supabase
    .from('knowledge')
    .select('*')
    .order('id', {
      ascending: true
    })

  const { data: formations } = await supabase.from('formation').select('*')

  const { data: experiences } = await supabase
    .from('experiences')
    .select('*')
    .order('date_start', {
      ascending: false
    })

  return {
    props: {
      knowledge,
      formations,
      experiences
    },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

interface HomeProps {
  knowledge: IKnowledge[]
  formations: IFormation[]
  experiences: IExperience[]
}

const Home: NextPage<HomeProps> = ({ knowledge, formations, experiences }) => {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Knowledge knowledge={knowledge} />
      <Formation formations={formations} />
      <Experience experiences={experiences} />
    </>
  )
}

export default Home
