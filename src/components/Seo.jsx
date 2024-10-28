function Seo({ title = 'Hola, React 19', description = 'Hola, React 19' }) {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
    </>
  )
}

export default Seo
