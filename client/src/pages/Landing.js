import React, {useState, useEffect} from 'react'
import authPost from '../axios/custom.js'

const Landing = () => {
  const [title, setTitle] = useState('') 
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [display, setDisplay] = useState('')
  const [writer, setWriter] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await authPost.post('/postBlog', {title, body, author})
      console.log(resp.data);
    } catch (error) {
      console.log(error.resp);
    }
  }


  const fetchData = async () => {
    try {
      const response = await fetch('/api/readBlog')
      const data = await response.json()
      let display = data.blogs[0].body
      setDisplay(display)
      let myWriter = await data.blogs[0].author
      setWriter(myWriter)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <h1>Welcome to Blogify!</h1>


<div className='create'>
  <h2>Add a new Blog</h2>

<form onSubmit={handleSubmit}>
    <label>
      Blog Title:
    </label>
      <input 
        type='text' 
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      <label>Blog body:</label>
      <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
      <label>Blog author:</label>
      <input 
        type='text' 
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
    <button>Submit Blog</button>

</form>
</div>

  <br />

<div className="create">
  <button onClick={fetchData}>Click Me To View A Blog</button>
  
     
      <div>{writer}</div>

      <p>{display}</p>

</div>


    </> 
  )
}

export default Landing