const React = require('react');

const App = () => {
    const [times, setTimes] = React.useState(0)
    return (
        <div>
            <h1>hello {times}</h1>
            <button onClick={() => setTimes(prev => prev + 1)}>ADD</button>
        </div>
    )
}

module.exports =  App