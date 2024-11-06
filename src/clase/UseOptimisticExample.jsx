import { useOptimistic, useState, useRef } from 'react'

async function deliverMessage(message) {
  // Simular que llamamos a una API
  await new Promise((res, rej) => setTimeout(res, 1000))
  return message
}

export function UseOptimisticExample() {
  const formRef = useRef()

  const [messages, setMessages] = useState([
    { text: 'Hola Mundo!', sending: false, key: 1 },
  ])

  const [optimisticMessages, setOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  )

  async function formAction(formData) {
    formRef.current.reset()
    setOptimisticMessage(formData.get('message'))
    try {
      const sentMessage = await deliverMessage(formData.get('message'))
      setMessages(messages => [...messages, { text: sentMessage }])
    } catch (e) {
      // Llamar a un toastiy y mostrar que ha fallado
      setMessages(messages)
    }
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Enviando...)</small>}
        </div>
      ))}

      <form action={formAction} ref={formRef}>
        <input type='text' name='message' placeholder='Hello!' />
        <button>Enviar</button>
      </form>
    </>
  )
}
