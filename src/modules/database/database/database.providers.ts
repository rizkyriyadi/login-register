import { DATA_SOURCE_TOKEN } from 'src/common/constant';
import { User } from 'src/entities/user/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DATA_SOURCE_TOKEN,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
