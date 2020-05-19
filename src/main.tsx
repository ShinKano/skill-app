import * as React from 'react'
import * as ReactDOM from 'react-dom'
//
import BoxContainer from './container/BoxContainer'

const App: React.FC = () => {
  return (
    <>
      <div>aaa</div>
      <BoxContainer />
    </>
  )
}

ReactDOM.render(<App/>, document.querySelector('#app'))