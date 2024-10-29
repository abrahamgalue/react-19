import { version } from 'react'
import './App.css'
import Seo from './components/Seo'
import Form from './components/Form'
import { preload } from 'react-dom'
import Logo from './components/Logo'

function App() {
  preload('https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css', {
    as: 'style',
    priority: 'low',
  })

  preload('https://react.dev/images/uwu.png', {
    as: 'image',
  })

  return (
    <>
      <Seo title='Hola, React 19' description='Hola, React 19' />
      <div>
        <Logo className='logo react' alt='React uwu' />
        <h3 className='hola'>React {version}</h3>
        <small style={{ color: 'yellow', fontSize: '10px' }}>
          La version es {version}
        </small>
      </div>

      <Form />
    </>
  )
}

export default App
