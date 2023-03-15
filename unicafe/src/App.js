import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  if (props.feedbackTotal === 0) {
    return (
      <div>
        No feedback given.
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.feedbackTotal}</p>
      <p>Average: {props.feedbackAverage / props.feedbackTotal}</p>
      <p>Positive: {props.good/props.feedbackTotal*100}%</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbackTotal, setFeedbackTotal] = useState(0)
  const [feedbackAverage, setFeedbackAverage] = useState(0)

  const feedbackGood = () => {
    setGood(good + 1)
    setFeedbackAverage(feedbackAverage + 1)
    const updatedGood = good + 1
    const updatedGoodAverage = feedbackAverage + 1
    setGood(updatedGood)
    setFeedbackTotal(updatedGood + neutral + bad)
    setFeedbackAverage(updatedGoodAverage)

  }

  const feedbackNeutral = () => {
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setFeedbackTotal(updatedNeutral + good + bad)
  }

  const feedbackBad = () => {
    setBad(bad + 1)
    setFeedbackAverage(feedbackAverage - 1)
    const updatedBad = bad + 1
    const updatedBadAverage = feedbackAverage - 1
    setBad(updatedBad)
    setFeedbackTotal(updatedBad + good + neutral)
    setFeedbackAverage(updatedBadAverage)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={feedbackGood} text= 'Good' />
      <Button handleClick={feedbackNeutral} text= 'Neutral' />
      <Button handleClick={feedbackBad} text= 'Bad' />
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      feedbackTotal={feedbackTotal}
      feedbackAverage={feedbackAverage}
      />
    </div>
  )
}

export default App
