import { version } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Seo from './components/Seo'

function App() {
  return (
    <>
      <Seo title='Hola, React 19' description='Hola, React 19' />
      <title>{`Hola React 19 ${version}`}</title>
      <meta name='description' content='Hola, React 19' />
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css'
      />

      <AnotherComponent />

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

function AnotherComponent() {
  return <Seo title='Hola, hola!' description='Otra descripcion' />
}

export default App
