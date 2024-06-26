import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {

    const queryFn = async () => {

      const response = await fetch(`/v1/maps/api/place/textsearch/json?query=레빗홀&language=ko&key=AIzaSyDg6ffV2VjRNDwVG8hKSbla1JVWH_iYek0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application.json",
          },
        }
      )
      const data = await response.json();

      console.log(data);

    };
    queryFn()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
