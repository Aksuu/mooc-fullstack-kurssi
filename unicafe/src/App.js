import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbackTotal, setFeedbackTotal] = useState(0)

  const feedbackGood = () => {
    setGood(good + 1)
    const updatedGood = good + 1
    setGood(updatedGood)
    setFeedbackTotal(updatedGood + neutral + bad)
  }

  const feedbackNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setFeedbackTotal(updatedNeutral + good + bad)
  }

  const feedbackBad = () => {
    setBad(bad  + 1)
    const updatedBad = bad + 1
    setBad(updatedBad)
    setFeedbackTotal(updatedBad + good + neutral)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={feedbackGood} text= 'Good' />
      <Button handleClick={feedbackNeutral} text= 'Neutral' />
      <Button handleClick={feedbackBad} text= 'Bad' />

      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {feedbackTotal}</p>
    </div>
  )
}

export default App
