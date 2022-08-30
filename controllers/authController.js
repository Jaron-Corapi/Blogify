import Blog from '../models/blogs.js'

const postBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
    res.status(201).json({blog})
  } catch (error) {
    res.status(500).json({msg: 'there was an error'})
  }
}

const readBlog = async (req, res) => {

  const blogs = await Blog.find({author: 'Natsume Sōseki'})
  res.json({blogs})
}

export {postBlog, readBlog}