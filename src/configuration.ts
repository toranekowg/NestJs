import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';
import * as __ from 'lodash';
const YAML_COMMON_CONFIG_FILENAME = 'config.yml';

const filePath = join(__dirname, '../config', YAML_COMMON_CONFIG_FILENAME);
const envPath = join(__dirname, '../config', `config.${process.env.NODE_ENV || 'development'}.yml`);

const commonConfig = yaml.load(readFileSync(filePath, 'utf8'));
const envConfig = yaml.load(readFileSync(envPath, 'utf8'));

//因为 ConfigModule 有一个load方法-> 需要导入一个函数
export default () => {
  return __.merge(commonConfig, envConfig); //lodash的merge方法 合并两个配置文件
};
