import express, { json, Request, Response } from "express"
import { routes } from "./routes"


export function createApp() {

    const app = express()

    app.use(json())

    app.use("/api", routes)

    return app
}
