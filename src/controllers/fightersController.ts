import { Request, Response } from "express";

export async function fightResult(req: Request, res: Response) {
  try {
    const { firstUser, secondUser } = req.query;
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};