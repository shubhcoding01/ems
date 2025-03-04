import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [asignTo, setAsignTo] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(taskTitle, taskDate, asignTo, taskCategory, taskDescription);

    setNewTask({
      taskTitle,
      taskDate,
      asignTo,
      taskCategory,
      taskDescription,
      active:false,
      newTask:true,
      failed:false,
      completed:false
    })
    const data = userData

    

    // const data = JSON.parse(localStorage.getItem('employees'))
    // console.log(data);

    data.forEach(function (elem){
      if(asignTo == elem.firstname){
        elem.tasks.push(newTask)
        elem.task_numbers.newTask = elem.task_numbers.newTask+1;
        // console.log(elem)
      }
      
    })
    setUserData(data)
    
    console.log(data);
    // localStorage.setItem('employees', JSON.stringify(data))

    setTaskTitle('')
    setTaskDate('')
    setAsignTo('')
    setTaskCategory('')
    setTaskDescription('')

    
    // console.log(task)
  }

  return (
    <div onSubmit={(e)=>{
      submitHandler(e)
    }} className='p-5  mt-5 rounded'>
          <form className='flex flex-wrap w-full items-start justify-between' action="">
            <div className='w-1/2'>

              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value={taskTitle}
                onChange={(e) =>{
                  setTaskTitle(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' 
                />
              </div>

              <div>   
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                value={taskDate}
                onChange={(e) =>{
                  setTaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" 
                />
              </div>

              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                <input 
                value={asignTo}
                onChange={(e) =>{
                  setAsignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' 
                />
              </div>

              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={taskCategory}
                onChange={(e) =>{
                  setTaskCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' 
                />
              </div>

              

            </div>
            
           <div className='w-2/5 flex flex-col items-start'>
               <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
               <textarea 
               value={taskDescription}
               onChange={(e) =>{
                 setTaskDescription(e.target.value)
               }}
               className='w-full h-44 text-sm py-2 px-4  rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" cols="30" rows="10"></textarea>
               <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
              
            </div>
           
          </form>
        </div>
  )
}

export default CreateTask