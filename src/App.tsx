import JobList from './components/JobList'
import { mockJobs } from './data/mockJobs'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-emerald-700">CleanPlan</h1>
        <p className="mb-6 text-slate-600">Cleaning job planner</p>
        <JobList jobs={mockJobs} />
      </div>
    </div>
  )
}

export default App