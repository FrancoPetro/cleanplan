import { useState } from 'react'
import JobList from './components/JobList'
import { mockJobs } from './data/mockJobs'
import type { Job, JobStatus } from './types'

function App() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs)

  const toggleStatus = (id: string) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id !== id) return job
      const newStatus: JobStatus = job.status === 'done' ? 'pending' : 'done'
      return { ...job, status: newStatus }
    })
    setJobs(updatedJobs)
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-emerald-700">CleanPlan</h1>
        <p className="mb-6 text-slate-600">Cleaning job planner</p>
        <JobList jobs={jobs} onToggleStatus={toggleStatus} />
      </div>
    </div>
  )
}

export default App