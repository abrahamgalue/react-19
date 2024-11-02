import { useState, useTransition } from 'react'
import { updateName } from '../utils'

export function ActionsExample() {
  const [name, setName] = useState('')
  const [error, setError] = useState(null)
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    startTransition(async () => {
      // empieza -> isPending -> true
      const error = await updateName(name) // llamar a la API

      if (error) {
        setError(error)
        setResult('')
      } else {
        setResult(name)
        setError(null)
      }
      // -> isPending -> false
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        disabled={isPending}
        placeholder='Ej. Abraham Galue'
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button disabled={isPending}>
        {isPending ? 'Cargando...' : 'Actualizar'}
      </button>

      {error && <p>❌ {error}</p>}

      {result && !error && <p>✅ El nombre guardado es: {result}</p>}
    </form>
  )
}
