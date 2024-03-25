import { Module } from '@nestjs/common';
import { QueryService } from './query.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  providers: [QueryService, PrismaModule],
})
export class QueryModule {}
