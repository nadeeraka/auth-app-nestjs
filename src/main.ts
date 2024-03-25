import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Api documentation')
    .setVersion('1.0')
    // .setBasePath('api')
    .addBearerAuth()

    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
//   set as public api
app.enableCors()
  await app.listen(8000);
  console.log(`Application is running on 🚀: ${await app.getUrl()}`);
}
bootstrap();
