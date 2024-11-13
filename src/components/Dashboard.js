import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>Dashboard <Link className='underline' to={'/products'}>click here to navigate to Products page</Link>
    <h1>this is Dashboard for the admin page for gaurab thapa magar and now i have write</h1>
     </div>
  )
}

export default Dashboard