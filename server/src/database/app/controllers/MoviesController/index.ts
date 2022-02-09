import { Request, Response } from "express";
import { Movies } from "../../entity/Movies";
import { getRepository } from "typeorm";

export default class MoviesController {
  public async listAll(req: Request, res: Response): Promise<Response> {
    const list = await getRepository(Movies).find();
    return res.json(list);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const body = req.body;
    const objToString = JSON.stringify(body.listMovies);
    body.listMovies = objToString;
    console.log(body);

    try {
      await getRepository(Movies).insert(body);
      return res.status(201).send();
    } catch (error) {
      return res.status(404).send();
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const paramns = req.params;

    const list = await getRepository(Movies).findOne(paramns.id);

    if (list) {
      await getRepository(Movies).delete(paramns.id);
      return res.status(201).send();
    } else {
      return res.status(404).send();
    }
  }
}
