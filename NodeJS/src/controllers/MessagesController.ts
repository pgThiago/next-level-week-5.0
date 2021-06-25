import { Request, Response } from 'express'

import { MessagesService } from '../services/MessagesService'

export class MessagesController {	
	async create(req: Request, res: Response) {		
		const { email } = req.body
		const messagesService = new MessagesService()
		try {
			const users = await messagesService.create({ email })
			return res.status(201).json(users)
		} catch (error) {
			return res.status(400).json({ message: error.message })
		}		
	}
}