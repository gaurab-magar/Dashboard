import React from 'react'
import DashboardStatcGrid from './DashboardStatcGrid'
import TransactionCharts from './TransactionCharts'
import BuyerProfileChart from './BuyerProfileChart'

const Dashboard = () => {
  return (
   <div className='flex flex-col gap-4' >
      <DashboardStatcGrid />
      <div className='flex flex-row gap-4 w-full' >
        <TransactionCharts />
        <BuyerProfileChart />
      </div>
   </div>
  )
}

export default Dashboard