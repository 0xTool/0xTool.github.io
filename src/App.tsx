import { useState } from 'react'

import { useAccount, useConnect, useEnsName } from 'wagmi'

import './App.scss'
import Header from 'containers/Header'
import Footer from 'containers/Footer'

function App() {
  const { address, isConnected } = useAccount()
  const [count, setCount] = useState(0)

  return (
    <div className="dapp">
      <Header />

      <div className="dapp-main">

        <div className="dapp-content">
          <button onClick={() => setCount(c => c + 1)}>count is {count}</button>
          <p>
            Hakuna Matata
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
