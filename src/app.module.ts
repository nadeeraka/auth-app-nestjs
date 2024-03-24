import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true })],
  // controllers: [PrismaController],
  providers: [PrismaService],
})
export class AppModule {}
