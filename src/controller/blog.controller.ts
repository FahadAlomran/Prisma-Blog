import { Request, Response } from "express";
import { prisma } from "../config/db";

//create blog for user  
export const createOneBlog = async (req: Request, res: Response) => {
  try {
    await prisma.blog.create({
      data: {
        title: req.body.title,
        user: {
          connect: { id: req.params.id },
        },
      },
    });
    res.json({
      msg: "blog created",
    });
  } catch (error) {
    console.log(error);
  }
};

//get just user blogs
export const getUserBlog = async (req: Request, res: Response) => {
  try {
    let blogs = await prisma.blog.findMany({
      where: {
        user_id: req.params.id,
      },
    });
    res.json(blogs);
  } catch (error) {
    console.log(error);
  }
};

//get all blog for all user
export const getAllBlog = async (req: Request, res: Response) => {
  try {
    let blogs = await prisma.blog.findMany();

    res.json(blogs);
  } catch (error) {
    console.log(error);
  }
};

export const updateBlog = async (req: Request, res: Response) =>{
try {
    let updateBlg=req.body
    let blog=await prisma.blog.update({
        where:{
            id:req.params.id
        },
        data:updateBlg
    })
    res.json(blog)
} catch (error) {
    console.log(error);
}
}


export const deleteAllBlogOfUser = async (req: Request, res: Response) =>{
    try {
        await prisma.blog.deleteMany({
            where:{
                user_id: req.params.id,
            }
        })
        res.json({
            msg:'Blogs deleted'
        })

    } catch (error) {
        console.log(error);
        
    }
}


export const deleteOneBlogOfUser = async (req: Request, res: Response) =>{
    try {
        await prisma.blog.delete({
            where:{
                id: req.params.id,
            }
        })
        res.json({
            msg:'Blog deleted'
        })

    } catch (error) {
        console.log(error);
        
    }
}
