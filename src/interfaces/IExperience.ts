interface IExperience {
  id: number
  title: string
  logo_company: string
  date_start: string
  date_end?: string
  techs: string[]
  company: string
  description: string
}

export default IExperience
