import { useState } from 'react'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const Header = ({ text }) => <h1>{text}</h1>

const StatisticLine = ({ text, value }) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = (props) => {
  if (props.statisticsObj.counter > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.statisticsObj.good} />
          <StatisticLine text="neutral" value={props.statisticsObj.neutral} />
          <StatisticLine text="bad" value={props.statisticsObj.bad} />
          <StatisticLine text="all" value={props.statisticsObj.counter} />
          <StatisticLine text="average" value={props.statisticsObj.average} />
          <StatisticLine text="positive" value={props.statisticsObj.postive} />
        </tbody>
      </table>
    )
  } else {
    return (
      <div>No feedback given</div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [counter, setCounter] = useState(0)
  const [score, setScore] = useState(0)
  
  const statisticsObj = {
    good: good,
    neutral, neutral,
    bad: bad,
    counter: counter,
    score: score,
    average: score/counter,
    postive: (good/counter*100).toFixed(1).concat(" %")
  }
  
  const handleGoodClick = () => {
    setGood(good + 1)
    setCounter(counter + 1)
    setScore(score + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setCounter(counter + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setCounter(counter + 1)
    setScore(score - 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Header text="statistics" />
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <br></br>
      <br></br>
      <Statistics statisticsObj={statisticsObj} />
    </div>
  )
}

export default App
