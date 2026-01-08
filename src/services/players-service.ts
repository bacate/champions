import { noContent, ok } from "../utils/http-helper"

export const getPlayersService = async () => {
    const data = { "player": "Beckham" }
    let response = null

    if (data) {
        response = await ok(data)
    } else {
        response = await noContent()
    }

    return response

}