import { Router } from "express";

import MoviesController from "../../database/app/controllers/MoviesController";

const router = Router();
const movieControler = new MoviesController();

router.get("/movies", movieControler.listAll);
router.post("/movies", movieControler.create);
router.delete("/movies/:id", movieControler.delete);

export default router;
