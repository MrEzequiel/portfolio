interface IFormation {
  id: number
  title: string
  type: string
  location: string
  date_start: Date
  date_end?: Date | null
}

export default IFormation
