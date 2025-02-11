import {useState} from 'react'

const Title = (props) => {
    return <h1>{props.title}</h1>
}

const Button = (props) => {
    return <button onClick={props.button.onClick}>{props.button.text}</button>
}
const FeedbackButtons = (props) => {
    return (<>{
        props.buttons.map(
            b => <Button button={b}/>
        )
    }</>)
}

const Scores = (props) => {
    const all=props.scores.reduce((a,b)=>a+b)
    const average=(props.scores[0]-props.scores[2])/2
    const positive= all===0?0:props.scores[0]/all*100
     return (<div>
        <p>Good: {props.scores[0]}</p>
        <p>Neutral: {props.scores[1]}</p>
         <p>Bad: {props.scores[2]}</p>
         <p>all: {all}</p>
         <p>average: {average}</p>
         <p>positive: {positive} %</p>
    </div>)
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodButton ={text: "good", onClick: () => setGood(good+1)}
    const neutralButton ={text: "neutral", onClick: () => setNeutral(neutral+1)}
    const badButton ={text: "bad", onClick: () => setBad(bad+1)}


    return (<div>
        <Title title="Give feedback"/>
        <FeedbackButtons buttons={[goodButton,neutralButton,badButton]}/>
        <Title title="Statistics"/>
        <Scores scores={[good, neutral, bad]}/>
    </div>)
}

export default App