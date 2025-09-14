import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TakList from '../TaskList/TakList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[1C1C1C] h-screen'>
      <Header/>
      <TaskListNumbers/>
      <TakList/>
    </div>
  )
}

export default EmployeeDashboard
