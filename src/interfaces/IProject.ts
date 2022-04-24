interface IProject {
  id: number
  title: string
  description: string
  techs: string[]
  code_url?: string
  preview_url?: string
  type: 'challenge' | 'me' | 'practice'
  image?: string
}

export default IProject
