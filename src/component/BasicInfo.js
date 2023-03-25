import React from 'react'

 function BasicInfo(person) {
     return (
       <div>
         <h2>Basic Information</h2>
         <p>name: {person.firstName}</p>
         <p>birthdate: {person.birthDate}</p>
         <p>occupation: {person.occupation}</p>
       </div>
     );
   }

   export default BasicInfo;