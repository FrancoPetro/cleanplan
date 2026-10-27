import type { Job } from '../types'

export const mockJobs: Job[] = [
  { id: '1', client: 'Nordic Office ApS', address: 'Vesterbrogade 12, København V', date: '2026-10-26', hours: 3, price: 1350, status: 'done' },
  { id: '2', client: 'Mette Hansen', address: 'Nørrebrogade 45, København N', date: '2026-10-27', hours: 2, price: 700, status: 'pending' },
  { id: '3', client: 'Café Lys', address: 'Jægersborggade 8, København N', date: '2026-10-28', hours: 4, price: 1800, status: 'pending' },
  { id: '4', client: 'Søren Madsen', address: 'Amagerbrogade 101, København S', date: '2026-10-29', hours: 2.5, price: 875, status: 'pending' },
  { id: '5', client: 'Green Studio', address: 'Islands Brygge 20, København S', date: '2026-10-30', hours: 5, price: 2250, status: 'pending' },
]