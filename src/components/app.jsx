import { useState } from 'preact/hooks'
import preact from '../assets/preact.svg'
import vite from '/vite.svg'
import '../styles/app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app"
        className="m-5 p-5 flex flex-col justify-center items-center" >
        <div id="app-container"
          className="m-5 p-5 flex flex-row justify-start items-center" >
          <h1 className="m-2.5 p-2.5 text-2.5xl font-semibold" >
            Templates
          </h1>
          <a href="https://vitejs.dev">
            <img src={vite} id='logo-vite' className="m-1 p-1" alt="Vite-Logo" width={75} />
          </a>
          <a href="https://reactjs.dev">
            <img src={preact} id='logo-preact' className="m-1 p-1" alt="React-Logo" width={75} />
          </a>
        </div>
        <div id="app-card"
          className="m-2.5 p-2.5 flex flex-row justify-center items-center" >
          <button onClick={() => setCount((count) => count + 1)} >
            Count Is - {count}
          </button>
          <p className="m-2.5 p-2.5 bg-[#1A1A21] text-slate-300 rounded-xl" >
            Edit <code>Src/App.jsx</code> and save to test Hmr
          </p>
        </div>
        <p id="read" className="m-2.5 p-2.5 bg-[#1A121A] rounded-lg"  >
          Click on the Vite and React Logos to learn more
        </p>
      </div>
    </>
  )
}