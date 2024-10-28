function Seo({ title, description }) {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
    </>
  )
}

export default Seo
