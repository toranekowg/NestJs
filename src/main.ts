import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('dev console');
  app.setGlobalPrefix('api/v1'); //全局路由前缀
  const a = 345;
  console.log(a);
  await app.listen(3000);
}
bootstrap();
