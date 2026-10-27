import { useState, type FormEvent } from 'react'
import type { Job } from '../types'

type AddJobFormProps = {
  onAddJob: (job: Job) => void
}

const inputClass = 'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm'

function AddJobForm({ onAddJob }: AddJobFormProps) {
  const [client, setClient] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [hours, setHours] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newJob: Job = {
      id: crypto.randomUUID(),
      client,
      address,
      date,
      hours: Number(hours),
      price: Number(price.replace(',', '.')),
      status: 'pending',
    }

    onAddJob(newJob)

    setClient('')
    setAddress('')
    setDate('')
    setHours('')
    setPrice('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-slate-800">Add new job</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />
        <input
          className={inputClass}
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          className={inputClass}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          className={inputClass}
          type="number"
          placeholder="Hours"
          min="0.5"
          step="0.5"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          required
        />
        <input
          className={inputClass}
          type="text"
          inputMode="decimal"
          placeholder="Price (DKK), e.g. 1350,50"
          pattern="\d+([.,]\d{1,2})?"
          title="Use numbers, with up to 2 decimals (e.g. 1350,50)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Add job
        </button>
      </div>
    </form>
  )
}

export default AddJobForm