import React from 'react'
import Header from '../others/Header'
import NumberOfTask from '../others/NumberOfTask'
import ListTask from '../TaskList/ListTask'

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div className='p-10  h-screen'>
      {/* <h1>{data.id}</h1> */}
      <Header changeUser={props.changeUser} data={props.data}/>
      <NumberOfTask data={props.data}/>
      <ListTask data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard