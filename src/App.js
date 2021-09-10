import React from 'react'

import ContextC from './learn/ContextC'
import {UserProvider} from './learn/ContextUser'

function App() {
  return (
    <div>
      <br /><br /><br />
      <center>
        <div className="App">
          <UserProvider value="Bencode">
            <ContextC />
          </UserProvider>
        </div>
      </center >
    </div >
  )
}

export default App
