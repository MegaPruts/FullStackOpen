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

const StatisticLine = (props) => {
    return (<tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>)
}

const Total = (scores) => scores.reduce((a, b) => a + b)
const Average = (scores) => (scores[0] - scores[1]) / scores.length
const Positive = (scores) => Total(scores) === 0 ? 0 : scores[0] / Total(scores) * 100

const StatisticsView = (props) => {
    const scores = props.scores
    return (
        <div>
            <Title title="Statistics"/>
            <table>
                <tbody>
                {
                    (Total(scores) === 0)
                        ? <StatisticLine text="No feedback given"/>
                        : <>
                            <StatisticLine text="Good:" value={scores[0]}/>
                            <StatisticLine text="Neutral:" value={scores[1]}/>
                            <StatisticLine text="Bad:" value={scores[2]}/>
                            <StatisticLine text="All:" value={Total(scores)}/>
                            <StatisticLine text="Average:" value={Average([scores[0], scores[2]])}/>
                            <StatisticLine text="Positive:" value={Positive(scores) + " %"}/>
                        </>
                }
                </tbody>
            </table>
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