import express, { Request, Response } from "express"
import { getPlayerByIdService, getPlayersService, postCreatePlayerService } from "../services/players-service"

export const getPlayersController = async (req: Request, res: Response) => {

    const httpResponse = await getPlayersService()

    res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const getPlayerByIdController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    const httpResponse = await getPlayerByIdService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postCreatePlayerController = async (req: Request, res: Response) => {
    const bodyContent = req.body
    const httpResponse = await postCreatePlayerService(bodyContent)

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }

}