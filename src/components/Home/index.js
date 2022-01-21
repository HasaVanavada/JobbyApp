import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div>
          <h1 className="heading1">Find The Job That Fits Your Life</h1>
          <p className="paragraph1">
            Millions of people are searching for jobs, salary
            information,company reviews. Find the job that fits your abilities
            and potential.
          </p>
          <Link to="/jobs">
            <button
              type="button"
              className="find-jobs-button"
              onClick={onRedirectToJobs}
            >
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
