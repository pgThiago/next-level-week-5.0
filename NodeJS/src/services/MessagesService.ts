import { getCustomRepository } from "typeorm"

import { MessagesRepository } from '../repositories/MessagesRepository'

interface IMessagesCreate {
	text: string
}

export class MessagesService {
	async create({ text }: IMessagesCreate){
		const messagesRepository = getCustomRepository(MessagesRepository)

		const messageExists = await messagesRepository.findOne({ text })
		
		if(messageExists)	return messageExists

		const message = messagesRepository.create({
			text
		})

		await messagesRepository.save(message)

		return message
	}
}