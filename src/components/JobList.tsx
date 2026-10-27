import type { Job } from '../types'

type JobListProps = {
  jobs: Job[]
  onToggleStatus: (id: string) => void
}

const formatPrice = (amount: number) =>
  new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK' }).format(amount)

function JobList({ jobs, onToggleStatus }: JobListProps) {
  return (
    <ul className="space-y-3">
      {jobs.map((job) => (
        <li
          key={job.id}
          className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"
        >
          <div>
            <p className="font-semibold text-slate-800">{job.client}</p>
            <p className="text-sm text-slate-500">{job.address}</p>
            <p className="text-sm text-slate-500">
              {job.date} · {job.hours} h
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-slate-800">{formatPrice(job.price)}</p>
            <button
              onClick={() => onToggleStatus(job.id)}
              className={`cursor-pointer rounded-full px-2 py-0.5 text-xs font-medium hover:opacity-80 ${
                job.status === 'done'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}
            >
              {job.status === 'done' ? 'Done' : 'Pending'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default JobList