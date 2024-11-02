export const updateName = (name) => {
  // simula que hacemos una peticion
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name.length < 3) {
        resolve('El nombre debe tener al menos 3 caracteres')
        return
      }

      resolve()
    }, 3000)
  })
}

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        succes: true,
        data: 'ok'
      })
    }, 2000)
  })
}