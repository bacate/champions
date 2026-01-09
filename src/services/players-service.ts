import { PlayerModel } from "../models/player-model"
import { createPlayerRepository, findAllPlayersRepository, findPlayerByIdRepository } from "../repositories/players-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"

export const getPlayersService = async () => {
    const data = await findAllPlayersRepository()
    let response = null

    if (data) {
        response = await ok(data)
    } else {
        response = await noContent()
    }

    return response

}

export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayerByIdRepository(id)
    let response = null

    if (data) {
        response = await ok(data)
    } else {
        response = await noContent()
    }

    return response
}

export const postCreatePlayerService = async (player: PlayerModel) => {
    let response = null

    if (Object.keys(player).length !== 0) {
        await createPlayerRepository(player)
        response = await created()
    } else {
        response = await badRequest()
    }

    return response
}