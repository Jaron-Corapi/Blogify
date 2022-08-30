import express from 'express'
const router = express.Router()

import {postBlog, readBlog} from '../controllers/authController.js'

router.route('/postBlog').post(postBlog)
router.route('/readBlog').get(readBlog)

export default router