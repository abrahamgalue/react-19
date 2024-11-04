import { useState, useActionState } from 'react'
import { updateName } from '../utils'
import { useFormStatus } from 'react-dom'

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

      <input name='secret' type='password' defaultValue={123} />

      <Button isPending={isPending} />

      {error && <p>❌ {error}</p>}

      {result && !error && <p>✅ El nombre guardado es: {result}</p>}
    </form>
  )
}

function Button() {
  const { pending, data, method, action } = useFormStatus()

  console.log({
    pending,
    data: data?.get('secret'),
    method,
    action,
  })

  return (
    <button disabled={pending}>{pending ? 'Cargando...' : 'Actualizar'}</button>
  )
}
