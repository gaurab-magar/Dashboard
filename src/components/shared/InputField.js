import React from 'react'

const InputField = ({label , placeholder, icon:Icon , value , onChange}) => {
  return (
    <div className='mb-4'>
        {label && <label className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>}
        <div className='flex items-center border rounded-lg px-3 py-2'>
            {Icon && <Icon className='text-gray-500' />}
        </div>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full px-2 py-1 text-gray-700 outline-none border-none" >{fieldName}</input>
    </div>
  )
}

export default InputField