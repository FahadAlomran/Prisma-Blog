import { Request, Response } from "express";
import { prisma } from "../config/db";

export const Register = async (req: Request, res: Response) => {
  try {
    let user = req.body;
    await prisma.user.create({
      data: user,
    });
    res.json({
      message: "user created",
    });
  } catch (error) {
    console.log(error);
  }
};
export const getOneUser = async (req: Request, res: Response) => {
  try {
    let id = req.params;
    let user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    let { username, password } = req.body;
    await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    res.json({
      message: `welcome ${username}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAlluser = async (req: Request, res: Response) => {
  try {
    let user = await prisma.user.findMany();

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
