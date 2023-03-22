import React from "react";

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part, exercise }) => {
  return (
      <p>
        {part} {exercise}
      </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
        {parts.map(part =>
        <Part
          key={part.name}
          part={part.name}
          exercise={part.exercises}
        />
        )}
    </div>
  )
}

const Total = ({ exercises }) => {
  return (
    <div>
      <p>Total: {exercises.reduce((accumulator, current) => accumulator += current)}</p>
    </div>
  )
}

const Course = ({ course }) => {
return (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total exercises={course.parts.map(part => part.exercises)}/>
  </div>
)
}

export default Course;
