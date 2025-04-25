import React from 'react'
import './Jobs.css'


const Jobs = () => {

  const companyName = 'ECI Innovations';

  const jobCount = 650;

  const getJobMessage = () => {

// we can also use the code in the coment below for the condition statment
    return (jobCount === 0)? "No jobs Availiable": `Jobs running today from Boot: ${jobCount}`
  }

  //  OR 
    // if (jobCount === 0){
    //   return " No Jobs available Today!!"
    //  }
    //   else {
    //   return  `Jobs running today  from Boot:${jobCount} `;
    //  }

  return (
    <div>

      <h1> Welcome to {companyName} </h1>
      <p>
        {getJobMessage()}
      </p>
      
    </div>
  );
}
export default Jobs


