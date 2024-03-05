import { MessagesRepository } from "./messages.repository";

export class MessagesService {
	//引入MessagesRepository
	messagesRepo: MessagesRepository; //类型为MessagesRepository
	//实例化MessagesRepository
	constructor() {
		//服务自己创建依赖关系
		//不在真实的应用中使用这样的方法
		this.messagesRepo = new MessagesRepository();
	}

	findOne(id: string) {
		return this.messagesRepo.finOne(id);
	}

	findAll() {
		return this.messagesRepo.findAll();
	}

	create(content: string) {
		return this.messagesRepo.create(content);
	}
}
