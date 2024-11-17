import React from 'react'
import DashboardStatcGrid from './DashboardStatcGrid'
import TransactionCharts from './TransactionCharts'

const Dashboard = () => {
  return (
   <div>
      <DashboardStatcGrid />
      <TransactionCharts />
   </div>
  )
}

export default Dashboard