const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  let contentItems = props.course.parts.map((part) =>
    <Part key={part.name} name={part.name} exercises={part.exercises} />
  )

  return (
    <>{contentItems}</>
  )
}

const Total = (props) => {
  let exercisesArr = props.course.parts.map(part => part.exercises)
  let sum = exercisesArr.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {

  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App