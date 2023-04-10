import React, { useContext } from 'react'
import { AppContext } from '../components/Sidebar'

const Categories = () => {

  const {isOpen} = useContext(AppContext)

  return (
    <div
    style={{
      width: isOpen ? "calc(100% - 250px)" : "calc(100% - 80px)",
      left: isOpen ? "250px" : '80px'
    }}
    className='h-[500vh] relative px-4 mt-[5rem]'
    >

    <h1 className='text-3xl'>Categories page of the App</h1>

    </div>
  )
}

export default Categories