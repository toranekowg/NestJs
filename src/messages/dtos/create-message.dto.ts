import { IsString } from "class-validator";

export class CreateMessageDto {
	@IsString() //确保创建CreateMessageDto的实例时，content属性是一个字符串 而不能是其他类型
	content: string;
}
