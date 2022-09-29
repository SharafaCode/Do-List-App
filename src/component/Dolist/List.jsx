import React from 'react';
import { MdEdit, MdDelete} from "react-icons/md";
import './dolist.css';

export const List = ({items, RemoveItem, EditItem}) => {
  return (
    <>
    {
        items.map(({id, title})=>{

            return(

            <article >

                <div className='list-container' key={id}>
                        <p>
                            {title}
                        </p>
                     
                    <div className='list' >
                            
                        <div className='edit'>
                            < MdEdit onClick={()=> EditItem(id)}/>
                        </div>

                        <div className='delete'>
                            < MdDelete  onClick={()=> RemoveItem(id)}/>
                        </div>
                    </div>
                </div> 
            </article>

            )
        })
    }

   </>
  )
}


export default List