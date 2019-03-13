import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Test from '../containers/Test.jsx'

class App extends Component {
    render() {
        return (
            <div>
                <Test/>
            </div>
        )
    }
}

//export default hot(module)(App);
export default App;