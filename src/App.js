import React from "react"
import "./App.css"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      n:99
    }
  }
  render() {
    return (
      <div className="App">
        <F1  n1={this.state.n}/>
      </div>
    )
  }
}

function F1(props) {
  return (
    <div> 
      1111,{props.n1}
      <F2  n2={props.n1}/>
    </div>
  )
}
function F2(props) {
  return (
    <div>
      2222,{props.n2}
      <F3 n3={props.n2}/>
    </div>
  )
}
function F3(props) {
  return (
    <div>
      3333,{props.n3}
      <F4 n4={props.n3}/>
    </div>
  )
}
function F4(props) {
  return (
    <div>
      4444,{props.n4  }
    </div>
  )
}

export default App
