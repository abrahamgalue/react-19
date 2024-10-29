import { useRef } from 'react'

function Input({ ref }) {
  return <input ref={ref} type='text' placeholder='Ej. abrahamgalue' />
}

function Form() {
  const inputRef = useRef()

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css'
      />
      <form>
        <Input ref={inputRef} />
      </form>

      <button onClick={focusInput}>Focus input</button>
    </div>
  )
}

export default Form
