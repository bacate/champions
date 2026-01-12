import { Router } from "express";
import { deletePlayerController, getPlayerByIdController, getPlayersController, postCreatePlayerController, updatePlayerController } from "./controllers/players-controller";
import { getClubsController } from "./controllers/clubs-controller";

export const routes = Router()

routes.get("/players", getPlayersController)
routes.get("/players/:id", getPlayerByIdController)
routes.post("/players", postCreatePlayerController)
routes.delete("/players/:id", deletePlayerController)
routes.patch("/players/:id", updatePlayerController)

routes.get("/clubs", getClubsController)