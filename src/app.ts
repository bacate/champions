import express, { json, Request, Response } from "express"
import { routes } from "./routes"
import cors from "cors"


export function createApp() {

    const app = express()

    app.use(json())

    app.use(cors())

    app.use("/api", routes)

    return app
}
