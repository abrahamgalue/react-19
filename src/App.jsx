import { version } from 'react'
import './App.css'
import Seo from './components/Seo'
import { preload } from 'react-dom'
import Logo from './components/Logo'
import { UseOptimisticExample } from './clase/UseOptimisticExample'

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

      <UseOptimisticExample />
    </>
  )
}

export default App
