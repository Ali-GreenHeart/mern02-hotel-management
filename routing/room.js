import { Router } from "express";
import { roomModel } from "../model.js";
import adminAuthMiddleware from "../auth/adminAuthMiddleware.js";

const roomRouter = new Router()

roomRouter.get("/", async (req, res) => {
    const rooms = await roomModel.find()
    return res.send(rooms)
})

roomRouter.post("/createRoom", adminAuthMiddleware, async (req, res) => {
    await roomModel.create(req.body)
    return res.send("otaq yaradildi..")
})

export default roomRouter;
