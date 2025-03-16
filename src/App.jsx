const Header = (title) => {
    return (
        <h1>{title.title}</h1>
    )
}
const Contents = (exercises) => {
    return (
        <>
            {exercises.exercises.map((e) => <p>{e.part} {e.numberOfExercises}</p>)}
        </>
    )
}
const NumberOfExercises = (exercises) => {
    const total = exercises.exercises.map((e) => e.numberOfExercises).reduce((a, b) => a + b)
    return (
        <p>Number of exercises {total}</p>
    )
}
const App = () => {
    const course = {title: 'Half Stack application development'}
    const exercises = [
        {part: 'Fundamentals of React', numberOfExercises: 10},
        {part: 'Using props to pass data', numberOfExercises: 7},
        {part: 'State of a component', numberOfExercises: 14}]
    return (
        <div>
            <Header title={course.title}/>
            <Contents exercises={exercises}/>
            <NumberOfExercises exercises={exercises}/>
        </div>
    )
}

export default App