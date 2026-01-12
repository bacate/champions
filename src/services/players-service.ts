import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import { createPlayerRepository, deletePlayerRepository, findAllPlayersRepository, findPlayerByIdRepository, updatePlayerRepository } from "../repositories/players-repository"
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

export const deletePlayerService = async (id: number) => {
    let response = null
    let isDeleted = await deletePlayerRepository(id)

    if (isDeleted) {
        response = await ok({ message: "deleted" })
    } else {
        response = await badRequest()
    }

    return response
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await updatePlayerRepository(id, statistics)
    let response = null

    if (Object.keys(data).length === 0) {
        response = await badRequest()
    } else {
        response = await ok(data)
    }

    return response
}