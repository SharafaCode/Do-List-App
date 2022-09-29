import React, { useState } from 'react';
import Alert from './Alert.jsx';
import List from './List'
import './dolist.css';
import image from '../../assets/undraw_To_do_list_re_9nt7-removebg-preview (1).png'


// const LocalStorage = () =>{
//   let list = localStorage.getItem('list');

//   if(list){
//     return JSON.parse(localStorage.getItem('list'))
//   }

//   else{
//     return [];
//   } 
  
// }

const DoList = () => {

   const [values, setValues] = useState('');
    const [list, setList] = useState([]);
    const [laoding, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null)
    const [alert, setAlert] = useState(false)
 
  console.log(values);
  const HandleSubmit = (e) => {

    e.preventDefault()
 
    if(!values){

     
      setAlert({show:true, type: 'danger', mess: 'please enter a valid value'})

    }

    else if(values && isEditing){
      setList(
        list.map((item)=>{
         if(item.id === editID){
          return{...item, title:values}
         }
         return item
        })
      )
      setIsEditing(false)
      setEditID(null)
      setValues('')
      setAlert({show:true, type:'success', mess: 'Item Edited'})
    }

    else{
      setAlert({show:true, type: 'success', mess: 'item added to the list'})
      const NewList = ({id: new Date().getTime().toString(), title:values})

      setList([...list, NewList])
      setValues('')
      setLoading(true)
    }

  }

  const ClearAll = () => {

    setList(()=>{
      setList([])
    })

    setAlert({show:true, type: 'danger', mess: 'All Items Cleared from list'})
    setLoading(false)
    setIsEditing(false)
    setValues('')
    
  }

  const RemoveItem = (id)=>{

    const Items = list.filter((item)=> item.id !== id)
    setList(Items)
    setAlert({show:true, type: 'danger', mess: 'Item Removed from list'})

    if(Items > - 1){
      setLoading(false)
    
    }
    setIsEditing(false)
    setValues('')
    
  }

  const EditItem = (id)=>{
    
    const NewEdit = list.find((item)=> item.id === id);

    setEditID(id)
    setIsEditing(true)
    setValues(NewEdit.title)


  }

  // useEffect(()=>{
  //   localStorage.setItem('list', JSON.stringify('list'))

  // }, [list])

  return (


    <main>

      <section className='container'>

        <article className='wrapper'>

        <div className='text'>
          <h1>
            Do List App
          </h1>
        </div>

          <div>
            < Alert {...alert} removeAlert={setAlert}/>
          </div>

            <div className='form'>

              <form onSubmit={HandleSubmit}>

                <input type="text" autoFocus={true} placeholder='Add New Task' value={values} onChange={(e)=>setValues(e.target.value)}/>

                <button type='submit' className='add'> {isEditing? 'EDIT Task': 'Add Task'} </button>

              </form>

            </div>

            <div>
              < List items={list} RemoveItem={RemoveItem} EditItem={EditItem}  />
            </div>
            
            {
              laoding &&

            <div className='btn'>
            
              <div >

                <button className='clear' onClick={()=> ClearAll()}>Clear Task</button>

              </div>
              
            </div>

            }

            {
              !laoding &&

            <div className='image'>
              <h2>Enter New Task</h2>
              <img src={image} alt="" />
            </div>

            }
            
          
        </article>
      </section>
    </main>
  )
}

export default DoList