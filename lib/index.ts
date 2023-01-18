/**************************************
@File    :   index.ts
@Time    :   2023/01/18 16:27:49
@Author  :   路拾遗
@Version :   1.0
@Contact :   lk920125@hotmail.com
***************************************/

import * as dotenv from 'dotenv'

export default new class Env {
    config
    constructor() {
        this.config = dotenv.config({ path: '.env' }).parsed
    }

    init(path: string) {
        this.config = dotenv.config({ path }).parsed
    }

    /**
     * 格式化环境变量
     * @param key 环境变量的键值
     * @param defaultValue 默认值
     * @param callback 格式化函数
     */
    fromatValue<T>(key: string, defaultValue: T, callback: (value: string) => T): T {
        const value: string | undefined = process.env[key]
        if (typeof value === 'undefined') {
            return defaultValue
        }
        return callback(value)
    }

    getStr = (key: string, defaultValue: string = '') => this.fromatValue(key, defaultValue, value => value)

    getNumber = (key: string, defaultValue: number = 0) => this.fromatValue(key, defaultValue, value => Number(value))

    getBoolean = (key: string, defaultValue: boolean = false) => this.fromatValue(key, defaultValue, value => value === 'true')

    getList = (key: string, defaultValue: string[] = []) => this.fromatValue(key, defaultValue, value => value.split(','))
}