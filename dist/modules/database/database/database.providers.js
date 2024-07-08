"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const constant_1 = require("../../../common/constant");
const user_entity_1 = require("../../../entities/user/user.entity");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: constant_1.DATA_SOURCE_TOKEN,
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '2113',
                database: 'login_register_test',
                entities: [user_entity_1.User],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map