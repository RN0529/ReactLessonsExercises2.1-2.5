import React from 'react'
const Header = (props) => {
  return (
    <>
      <h1>This course is {props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}


const Course= ({course})=> {

  const total = course.parts.reduce(function (acc, obj) { return acc + obj.exercises; }, 0);

  return(
    <div>
      <Header course={course.name}/>
      <div>
        {
          course.parts.map(oart => <Part part={oart.name} exercise={oart.exercises}/> )
        }   
      </div>
      <p>total of {total} </p>
    </div>
    
  )
}
export default Course