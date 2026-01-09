import { Router } from "express";
import { getPlayerByIdController, getPlayersController, postCreatePlayerController } from "./controllers/players-controller";

export const routes = Router()

routes.get("/players", getPlayersController)
routes.get("/players/:id", getPlayerByIdController)
routes.post("/players", postCreatePlayerController)