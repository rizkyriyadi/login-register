import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database/database.module';
import { LoginModule } from './modules/login/login/login.module';
import { RegisterModule } from './modules/register/register/register.module';

@Module({
  imports: [DatabaseModule, LoginModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
