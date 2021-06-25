import { Request, Response } from 'express'

import { UsersService } from '../services/UsersService'

export class UsersController {	
	async create(req: Request, res: Response) {		
		const { email } = req.body
		const usersService = new UsersService()
		try {
			const users = await usersService.create({ email })
			return res.status(201).json(users)
		} catch (error) {
			return res.status(400).json({ message: error.message })
		}		
	}
}