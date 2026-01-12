import { getClubsService } from "../services/clubs-service"
import express, { Request, Response } from "express"


export const getClubsController = async (req: Request, res: Response) => {

    const httpResponse = await getClubsService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}