import React from 'react'

const Button = ({btnName}) => {
  return (
    <button type='submit' className='border w-2/3  lg:max-w-32 text-center p-3 cursor-pointer bg-saffron text-white rounded-xl'>
      {btnName}
    </button>
  )
}
export default Button
