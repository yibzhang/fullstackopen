import { useState } from 'react'

const VoteDisplay = ({ votes }) => <div>has {votes} votes</div>

const Button = ({ text, handleClick }) => {
  return (<button onClick={handleClick}>{text}</button>)
}

const Header = ({ text }) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  // initialize votes as a object, keys are the index of the anecdotes array, values are all 0
  const [votes, setVotes] = useState(() => {
    let tmpObj = {}
    for (let i = 0; i < anecdotes.length; i++) {
      tmpObj[[i]] = 0;
    }
    return tmpObj
  })

  const handleNext = () => {
    let selectedUpdate = selected === anecdotes.length - 1 ? 0 : selected + 1
    setSelected(selectedUpdate)
  }

  const handleVote = () => {
    let voteUpdate = votes[selected] + 1
    setVotes({ ...votes, [selected]: voteUpdate })
  }

  // return the key of votes object which has the biggest value. (the key is also the index of anecdotes arrray)
  const maxVotesKey = () => {
    let maxKey = Object.keys(votes).reduce((previous, key) => {
      if (votes[previous] < votes[key])
        return key
      return previous
    }, 0)
    return maxKey
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      {anecdotes[selected]}
      <br />
      <VoteDisplay votes={votes[selected]} />
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={handleNext} />
      <Header text="Anecdote with the most votes" />
      {anecdotes[maxVotesKey()]}
      <VoteDisplay votes={votes[maxVotesKey()]} />
    </div>
  )
}

export default App