import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { MessagesModule } from "./messages/messages.module";

async function bootstrap() {
	const app = await NestFactory.create(MessagesModule);
	//希望在整个应用中使用相同的验证管道，可以使用app.useGlobalPipes()方法
	app.useGlobalPipes(new ValidationPipe({}));
	await app.listen(3000);
}
bootstrap();
