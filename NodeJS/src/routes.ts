import { Router } from 'express'
import { UsersController } from './controllers/UsersController'
import { MessagesController } from './controllers/MessagesController'
import { SettingsController } from './controllers/SettingsController'

const routes = Router()

const settingController = new SettingController()
const settingController = new SettingController()
const settingController = new SettingController()

routes.get("/", (req, res) => {
	return res.send({ ok: 'wtf'} )
})

routes.post("/users", usersController.create)
routes.post("/messages", messagesController.create)
routes.post("/settings", settingsController.create)

export { routes }