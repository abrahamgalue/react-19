import { useState, useActionState } from 'react'
import { updateName } from '../utils'

export function ActionsExample() {
  const [result, setResult] = useState(null)

  const updateNameAction = async (previousState, formData) => {
    const name = formData.get('username')
    const error = await updateName(name)

    if (error) return error
    setResult(name)
    return null
  }

  const [error, submitAction, isPending] = useActionState(updateNameAction)

  return (
    <form action={submitAction}>
      <input
        name='username'
        disabled={isPending}
        placeholder='Ej. Abraham Galue'
      />

      <button disabled={isPending}>
        {isPending ? 'Cargando...' : 'Actualizar'}
      </button>

      {error && <p>❌ {error}</p>}

      {result && !error && <p>✅ El nombre guardado es: {result}</p>}
    </form>
  )
}
