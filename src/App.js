import React from "react"
import "./App.css"
         
const nContext = React.createContext()



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
        <nContext.Provider value={99}>
          <F1  n1={this.state.n}/>
        </nContext.Provider>
      </div>
    )
  }
}

function F1(props) {
  return (
    <div className="bordered"> 
      1111
      <F2 />
    </div>
  )
}
function F2(props) {
  return (
    <div className="bordered">
      2222
      <F3 />
    </div>
  )
}
function F3(props) {
  return (
    <div className="bordered">
      3333
      <nContext.Consumer>
        {(n)=><F4 n4={n}/>}
      </nContext.Consumer>
    </div>
  )
}
function F4(props) {
  return (
    <div className="bordered">
      4444,{props.n4}
    </div>
  )
}

export default App
