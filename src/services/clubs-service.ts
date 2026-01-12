import { getClubsRepository } from "../repositories/clubs-repository"
import { badRequest, ok } from "../utils/http-helper"


export const getClubsService = async () => {
    let response = null
    const data = await getClubsRepository()

    if (data) {
        response = await ok(data)
    } else {
        response = await badRequest()
    }

    return response
}