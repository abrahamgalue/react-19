import { use } from 'react'
import { UserContext } from '../context/user'

export function UseContextExample({ enable = true }) {
  if (!enable) return null

  const { name, isLogged, updateUser } = use(UserContext)

  return (
    <div>
      {isLogged ? (
        <>
          <p>Hola, {name}</p>
          <button onClick={() => updateUser({ name: null, isLogged: false })}>
            Cerrar sesion
          </button>
        </>
      ) : (
        <>
          <p>Bienvenido</p>
          <button onClick={() => updateUser({ name: 'Juan', isLogged: true })}>
            Iniciar sesion
          </button>
        </>
      )}
    </div>
  )
}
