import React from 'react'

const App = () => {
    return (
        <div>
            <h1>hello {times}</h1>
            <button onClick={() => setTimes(prev => prev + 1)}>ADD</button>
        </div>
    )
}