import { useState } from 'react'

const App = () => {
  const [selected,setSelected] = useState(0)
  const [anecdote,setAnecdote] = useState([
    { anecdote: 'If it hurts, do it more often.', votes: 0 },
    { anecdote: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { anecdote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { anecdote: 'Premature optimization is the root of all evil.', votes: 0 },
    { anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 },
    { anecdote: 'The only way to go fast, is to go well.', votes: 0 },
  ])

  const random = () => {
    let randomNumber = Math.floor(Math.random()*anecdote.length)
    setSelected(randomNumber)
  }

  const handleVote = (index) => {
    const updateAnecdotes = [...anecdote]
    updateAnecdotes[index].votes += 1
    setAnecdote(updateAnecdotes)
  }

  const findAnecdote = () =>{
    let mostVoted = anecdote[0]
    let maxVotes = anecdote[0].votes

    anecdote.forEach((anecdote)=>{
      if(anecdote.votes > maxVotes){
        mostVoted = anecdote
        maxVotes = anecdote.votes
      }
    })
    return mostVoted
  }

  return(
    <div>
      <h1>Anecdote od the day</h1>
      <p>{anecdote[selected].anecdote}</p>
      <button onClick={()=>handleVote(selected)}>Vote</button>
      <button onClick={random}>Next anecdote</button>
      <p>Has {anecdote[selected].votes} votes</p>
      <h2>Anecdote with most votes</h2>
      <p>{findAnecdote().anecdote}</p>
    </div>
  )
}


export default App
