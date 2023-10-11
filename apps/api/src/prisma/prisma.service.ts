import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

// in express this is the pg pool stuff - or pg client
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get<string>('DATABASE_URL'),
        },
      },
    });
  }

  // when we connect
  async onModuleInit() {
    await this.$connect();
  }

  // to disconnect - should disconnect after each interaction
  async onModuleDestroy() {
    await this.$disconnect();
  }
}