const Header = (title) => {
    return (<h1>{title.title}</h1>)
}
const Contents = (exercises) => {
    return exercises.exercises.map((e)=><p key={e.part}>{e.part} {e.numberOfExercises}</p>)
}
const NumberOfExercises = (exercises) => {
    const total = exercises.exercises.map((e)=>e.numberOfExercises).reduce((a,b)=>a+b)
    return (<p>Number of exercises {total}</p>)
}
const App = () => {
    const course = {title: 'Half Stack application development'}
    const exercises = [
        {part: 'Fundamentals of React', numberOfExercises: 10},
        {part: 'Using props to pass data', numberOfExercises: 7},
        {part: 'State of a component', numberOfExercises: 14}]
    return (
        <div>
            <Header key='1' title={course.title}/>
            <Contents key='2' exercises={exercises}/>
            <NumberOfExercises key='3' exercises={exercises}/>
        </div>
    )
}

export default App