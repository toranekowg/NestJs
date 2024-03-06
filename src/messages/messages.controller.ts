import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	NotFoundException,
} from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";//引入CreateMessageDto 类作为参数类型
import { MessagesService } from "./messages.service";//

@Controller("messages")
export class MessagesController {
	messageService: MessagesService; //声明一个messageService属性
	constructor() {
		//注入一个MessagesService实例  真实app不这么用 会用依赖注入
		this.messageService = new MessagesService();
	}

	@Get()
	listMessages() {
		return this.messageService.findAll(); //调用findAll方法 返回所有消息
	}
	@Post()
	createMessage(@Body() body: CreateMessageDto) {
		return this.messageService.create(body.content);
	}

	@Get("/:id")
	async getMessage(@Param("id") id: string) {
		const message = await this.messageService.findOne(id);

		if (!message) {
			throw new NotFoundException("Message not found"); //抛出一个异常
		}
		return;
		message;
	}
}

