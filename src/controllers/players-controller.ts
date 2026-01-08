import express, { Request, Response } from "express"
import { getPlayersService } from "../services/players-service"

export const getPlayersController = async (req: Request, res: Response) => {

    const httpResponse = await getPlayersService()

    res.status(httpResponse.statusCode).json(httpResponse.body)

}