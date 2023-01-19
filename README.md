# envparser
nodejs 下获取env文件的解决方案

import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import env from 'envparsed'

export const CMysql: TypeOrmModuleOptions = {
    type: "mysql",
    host: env.getStr('DB_HOST', "XXXXXXXXX"),
    port: env.getNumber('DB_PORT', 1000000),
    username: env.getStr('DB_USERNAME', "root"),
    password: env.getStr('DB_PASSWORD', "FairyTail"),
    database: env.getStr('DB_DATABASE', "ch1_dev"),
    entities: [
        "dist/**/*.entities{.ts,.js}"
    ],
    logging: false,
    synchronize: env.getBoolean('DB_SYNCHRONIZE', false),
    autoLoadEntities: env.getBoolean('DB_AUTOLOADENTITIES', true)
}
