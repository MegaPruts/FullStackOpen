const Header = (titleObject) => {
    return (
        <h1>{titleObject.title}</h1>
    )
}
const Parts = (exercisesObject) => {
    return (
        <>{exercisesObject.exercises.map((e) => <Part key={e.part} part={e}/>)}</>
    )

}
const Part = (partsObject) => {
    return (
        <p>{partsObject.part.part} {partsObject.part.numberOfExercises}</p>
    )

}
const NumberOfExercises = (exercisesObject) => {
    const total = exercisesObject.exercises.map((e) => e.numberOfExercises).reduce((a, b) => a + b)
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
            <Header key='1' title={course.title}/>
            <Parts key='2' exercises={exercises}/>
            <NumberOfExercises key='3' exercises={exercises}/>
        </div>
    )
}

export default App