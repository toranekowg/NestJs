//引入读写文件的方法
import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
	//查找消息的方法
	async finOne(id: string) {
		//读取文件
		const contents = await readFile("messages.json", "utf-8");
		//字符串解析为一个对象
		const messages = JSON.parse(contents);
		return messages[id];
	}

	//查找所有消息的方法
	async findAll() {
		const contents = await readFile("messages.json", "utf-8");
		const messages = JSON.parse(contents);

		return messages;
	}

	//创建消息的方法
	async create(content: string) {
		const contents = await readFile("messages.json", "utf-8");
		const messages = JSON.parse(contents);
		//随机生成一个整数作为id 为了不重复
		const id = Math.floor(Math.random() * 999);
		//将消息添加到对象中
		// messages[id] = {id,content:content};
		messages[id] = { id, content };
		//将对象转换为字符串 写入文件
		await writeFile("messages.json", JSON.stringify(messages));
	}
}
