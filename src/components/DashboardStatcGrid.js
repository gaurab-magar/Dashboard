import React from 'react'
import {IoBagHandle} from 'react-icons/io5'
const DashboardStatcGrid = () => {
  return (
    <div className='flex gap-4'>
        <BoxWrapper>
            <div className='h-10 w-10 flex items-center justify-center bg-sky-500 rounded-full'>
                <IoBagHandle className='text-2xl text-white' />
            </div>
            <div>
                <h2 className='text-lg font-bold'>Total Sales</h2>
                <div className='flex items-center gap-2'>
                    <strong className='text-gray-500 font-semibold'>$2346.4360</strong>
                    <p className='text-sm text-sky-500'>+235</p>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='h-10 w-10 flex items-center justify-center bg-red-500 rounded-full'>
                <IoBagHandle className='text-2xl text-white' />
            </div>
            <div>
                <h2 className='text-lg font-bold'>Total Expenses</h2>
                <div className='flex items-center gap-2'>
                    <strong className='text-gray-500 font-semibold'>$2346.4360</strong>
                    <p className='text-sm text-sky-500'>+235</p>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='h-10 w-10 flex items-center justify-center bg-yellow-500 rounded-full'>
                <IoBagHandle className='text-2xl text-white' />
            </div>
            <div>
                <h2 className='text-lg font-bold'>Total Customers</h2>
                <div className='flex items-center gap-2'>
                    <strong className='text-gray-500 font-semibold'>$2346.4360</strong>
                    <p className='text-sm text-sky-500'>+235</p>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
            <div className='h-10 w-10 flex items-center justify-center bg-green-500 rounded-full'>
                <IoBagHandle className='text-2xl text-white' />
            </div>
            <div>
                <h2 className='text-lg font-bold'>Total Orders</h2>
                <div className='flex items-center gap-2'>
                    <strong className='text-gray-500 font-semibold'>$2346.4360</strong>
                    <p className='text-sm text-sky-500'>+235</p>
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}

export default DashboardStatcGrid

function BoxWrapper({children}){
    return (
        <div className='bg-white p-3 rounded-md border-gray-300 flex-1 shadow-md flex items-center gap-4'>
            {children}
        </div>
    )
}