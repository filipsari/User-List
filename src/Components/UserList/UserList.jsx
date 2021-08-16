import React from 'react';
import {data} from '../../data/data'
import './UserList.css'

const UserList =  () => {
 
return (

data.map( (element, index) => {

  return ( 
    <main key={index} > 
<div className="myData clearfix" key={index}>
         <img src={element.picture.medium}></img>
         <div className="text-part"> 
         <p>Name: { element.name.first}</p>
         <p>email: { element.email}</p>
         <p> Date of birth: { element.dob.date}</p>
         </div>
     </div>
     </main>
)
})

)


}


export {UserList};

