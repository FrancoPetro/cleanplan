import { useEffect, useState } from 'react'
import AddJobForm from './components/AddJobForm'
import JobList from './components/JobList'
import { mockJobs } from './data/mockJobs'
import type { Job, JobStatus } from './types'

const STORAGE_KEY = 'cleanplan-jobs'

function loadJobs(): Job[] {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return mockJobs

  try {
    return JSON.parse(saved)
  } catch {
    return mockJobs
  }
}

function App() {
  const [jobs, setJobs] = useState<Job[]>(loadJobs)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
  }, [jobs])

  const toggleStatus = (id: string) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id !== id) return job
      const newStatus: JobStatus = job.status === 'done' ? 'pending' : 'done'
      return { ...job, status: newStatus }
    })
    setJobs(updatedJobs)
  }

  const addJob = (job: Job) => {
    setJobs([...jobs, job])
  }

  const resetJobs = () => {
    setJobs(mockJobs)
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold text-emerald-700">CleanPlan</h1>
            <p className="text-slate-600">Cleaning job planner</p>
          </div>
          <button
            onClick={resetJobs}
            className="cursor-pointer text-sm text-slate-500 underline hover:text-slate-700"
          >
            Reset demo data
          </button>
        </div>
        <AddJobForm onAddJob={addJob} />
        <JobList jobs={jobs} onToggleStatus={toggleStatus} />
      </div>
    </div>
  )
}

export default App