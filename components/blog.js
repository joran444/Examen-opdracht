function Blog({ date, image, title, author}) {
  let { file, description } = image

  return (
    <div className="Blogs">
      <img alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
        <h3>Auter is: {author}</h3>
      </div>
    </div>
  )
}

export default Blog