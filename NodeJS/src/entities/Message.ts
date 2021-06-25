import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"

import { v4 as uuid } from 'uuid'

@Entity("messages")
export class Message {
	@PrimaryColumn()
	id: string

	@Column()
	text: string
	
	@CreateDateColumn()
	created_at: Date

	constructor(){
		if(!this.id)
			this.id = uuid()
	}
}