import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    minlength: 1,
    trim: true,
  },
  body: {
    type: String,
  },
  author: {
    type: String,
    minlength: 3,
    trim: true,
    required: [true, 'Please provide author\'s name']
  }
})

export default mongoose.model('Blog', BlogSchema)