import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API NEST')
    .setDescription('API criada em Nest.JS para fins de aprendizado')
    .setVersion('1.0')
    .addServer('http://localhost:3333')
    .addTag('status')
    .addTag('users')
    .addTag('sl')
    .addTag('empresa')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3333);
}
bootstrap();
