import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";//引入CreateMessageDto 类作为参数类型

@Controller("messages")
export class MessagesController {
	@Get()
	listMessages() {
		return 1;
	}
	@Post()
	createMessage(@Body() body: CreateMessageDto) {
		console.log(body);
	}

	@Get("/:id")
	getMessage(@Param("id") id: string) {
		console.log(id);
	}
}

