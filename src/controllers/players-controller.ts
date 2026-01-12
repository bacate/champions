import express, { Request, Response } from "express"
import { deletePlayerService, getPlayerByIdService, getPlayersService, postCreatePlayerService, updatePlayerService } from "../services/players-service"

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

export const deletePlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayerController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyContent = req.body

    const httpResponse = await updatePlayerService(id, bodyContent)

    res.status(httpResponse.statusCode).json(httpResponse.body)
}