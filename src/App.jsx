import {useState} from 'react'

const Title = (props) => {
    return <h1>{props.title}</h1>
}

const Button = (props) => {
    return <button onClick={props.button.onClick}>{props.button.text}</button>
}

const FeedbackView = (props) => {
    return (<>
        <Title title="Give feedback"/>
        {
        props.buttons.map(
            b => <Button button={b}/>
        )
    }</>)
}

const Total = (scores) => scores.reduce((a, b) => a + b)
const Average = (scores) => (scores[0] - scores[1]) / scores.length
const Positive = (scores) => Total(scores) === 0 ? 0 : scores[0] / Total(scores) * 100

const StatisticsView = (props) => {
    const scores = props.scores
    return (
        <div>
            <Title title="Statistics"/>
            {
                (Total(scores) === 0)
                    ? <p key="nofeedback">No feedback given</p>
                    : <>
                        <p key="good">Good: {scores[0]}</p>
                        <p key="neutral">Neutral: {scores[1]}</p>
                        <p key="bad">Bad: {scores[2]}</p>
                        <p key="all">all: {Total(scores)}</p>
                        <p key="average">average: {Average([scores[0], scores[2]])}</p>
                        <p key="positive">positive: {Positive(scores)} %</p>
                    </>
            }
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodButton = {text: "good", onClick: () => setGood(good + 1)}
    const neutralButton = {text: "neutral", onClick: () => setNeutral(neutral + 1)}
    const badButton = {text: "bad", onClick: () => setBad(bad + 1)}


    return (<div>
        <FeedbackView buttons={[goodButton, neutralButton, badButton]}/>
        <StatisticsView scores={[good, neutral, bad]}/>
    < /div>)
}

export default App