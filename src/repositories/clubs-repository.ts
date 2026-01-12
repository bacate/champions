import { ClubModel } from "../models/club-model"
import fs from "fs/promises"


export const getClubsRepository = async (): Promise<ClubModel[]> => {
    const data = fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(await data)

    return clubs
}