const Header = ({course}) => {
  return (
  <div>
    <h1>{course}</h1>
  </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <div>
      <p>
        {part} {exercise}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
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

const Total = ({exercises}) => {
  return (
    <div>
      <p>Total: {exercises.reduce((accumulator, current) => accumulator += current)}</p>
    </div>
  )
}

const Course = ({course}) => {
return (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total exercises={course.parts.map(part => part.exercises)}/>
  </div>
)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
