const Header = (titleObject) => {
    return (<h1>{titleObject.title}</h1>)
}
const Parts = (partsObject) => {
    return (<>{partsObject.parts.map(p => <Part key={p.name} part={p}/>)}</>)

}
const Part = (partsObject) => {
    return (<p>{partsObject.part.name} {partsObject.part.numberOfExercises}</p>)

}
const NumberOfExercises = (partsObject) => {
    return (<p>Number of exercises {partsObject.parts.map(p => p.numberOfExercises).reduce((a, b) => a + b)}</p>)
}
const App = () => {
    const course = {
        title: 'Half Stack application development',
        parts: [
            {name: 'Fundamentals of React', numberOfExercises: 10},
            {name: 'Using props to pass data', numberOfExercises: 7},
            {name: 'State of a component', numberOfExercises: 14}
        ]
    }

    return (<div>
        <Header title={course.title}/>
        <Parts parts={course.parts}/>
        <NumberOfExercises parts={course.parts}/>
    </div>)
}

export default App