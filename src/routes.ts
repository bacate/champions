import { Router } from "express";
import { getPlayersController } from "./controllers/players-controller";

export const routes = Router()

routes.get("/players", getPlayersController)