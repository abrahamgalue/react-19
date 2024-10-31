import { Suspense } from 'react'
import { use, useState } from 'react'

export function UseFetchExample() {
  const [name, setName] = useState('')

  const fetchPokemon = () => {
    if (!name) return Promise.resolve()

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
      if (res.ok) return res.json()
      return { error: true, message: 'No se pudo encontrar el pokemon' }
    })
  }

  return (
    <div>
      <form>
        <input
          placeholder='Ej. Pikacho'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>

      <Suspense fallback={<div>Cargando...</div>}>
        <ShowPokemon pokemonPromise={fetchPokemon()} />
      </Suspense>
    </div>
  )
}

function ShowPokemon({ pokemonPromise }) {
  const pokemon = use(pokemonPromise)

  if (pokemon?.error) {
    return <div>Error: {pokemon.message}</div>
  }

  if (!pokemon) return null

  return (
    <div>
      Resultado:
      <article>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Peso: {pokemon.weight}Kg</p>
      </article>
    </div>
  )
}
