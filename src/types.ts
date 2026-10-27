export type JobStatus = 'pending' | 'done'

export type Job = {
  id: string
  client: string
  address: string
  date: string // format: YYYY-MM-DD
  hours: number
  price: number // in DKK
  status: JobStatus
}