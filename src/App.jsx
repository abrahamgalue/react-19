import { version } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <title>{`Hola React 19 ${version}`}</title>
      <link rel='author' href='https://google.com' />
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css'
      />

      <div>
        <img src={reactLogo} className='logo react' alt='React logo' />
        <h3 className='hola'>React {version}</h3>
        <small style={{ color: 'yellow', fontSize: '10px' }}>
          La version es {version}
        </small>
      </div>
    </>
  )
}

export default App
