import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>Dashboard <Link className='underline' to={'/products'}>click here to navigate to Products page</Link> </div>
  )
}

export default Dashboard