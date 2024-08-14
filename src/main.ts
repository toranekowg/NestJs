import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('dev???', process.env.NODE_ENV);
  app.setGlobalPrefix('api/v1'); //全局路由前缀
  await app.listen(3000);
}
bootstrap();
