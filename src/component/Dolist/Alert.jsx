import React,{useEffect} from 'react'

const Alert = ({type, mess, removeAlert}) => {

  useEffect(() => {
    
    const TimeOut = setTimeout(()=>{

      removeAlert({show:false})


    },1000)
  
    return () => {
      clearTimeout(TimeOut)
    }
  })
  

  return (

    <div className= {`alert-container alert-${type} `}>

        <p>
            {mess}
        </p>
    </div>
  )
}

export default 
Alert