import axios from "axios";
import { NextFunction, Request, response, Response } from "express";
import { fightersSchema } from "../schemas/fightersSchema";

export async function validateFighters(req: Request, res: Response, next: NextFunction) {
  const fighters = req.body;
  const { error } = fightersSchema.validate(fighters, { abortEarly: false });

  if (error) {
    console.log(error.message);
    return res.status(422).send("Envie os usuários no formato correto.")
  }

  try {
    const firstUserData = getFightersInfo(fighters.firstUser);
    const secondUserData = getFightersInfo(fighters.secondUser);
    res.locals.firstUserData = firstUserData;
    res.locals.secondUserData = secondUserData;
    next();
  } catch (error) {
    return res.sendStatus(500);
  }
}

function getFightersInfo(username: string) {
  const promise = axios.get(`http://api.github.com/users/${username}/repos`);
  promise.then((res) => {
    const userData: object[] = res.data;
    return userData;
  });
  promise.catch((error) => {
    console.log(error);
  });
}