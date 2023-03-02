import {
  createOneBlog,
  getUserBlog,
  getAllBlog,
  updateBlog,
  deleteAllBlogOfUser,
  deleteOneBlogOfUser,
} from "../controller/blog.controller";
import express from "express";
let router = express.Router();

router.get('/',getAllBlog)

router.get('/:id',getUserBlog)

router.post('/:id',createOneBlog)

router.put('/:id',updateBlog)

router.delete('/all/:id',deleteAllBlogOfUser)

router.delete('/:id',deleteOneBlogOfUser)

export default router