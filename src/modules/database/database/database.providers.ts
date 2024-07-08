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
        username: 'root',
        password: '2113',
        database: 'login_register_test',
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
