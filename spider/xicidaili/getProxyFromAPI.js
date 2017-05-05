const os = require('os');
const superagent = require('superagent');
// const cheerio = require('cheerio');
const config = require('./config');
const ProxyModel = require('./../../model/proxy');
const logger = require('./../../utils/winston');


/**
 * 获取 Proxy 列表
 * @param {string} url proxy api
 * @return {Promise} Proxy list in txt
 */
function getProxyFromAPI(url) {
  return new Promise((resolve, reject) => {
    superagent.get(url)
      .set('User-Agent', config.userAgent)
      .timeout({ response: 20000, deadline: 21000 })
      .end((error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result.text);
      });
  });
}


/**
 * 将数据保存在数据库
 * @param {Array} data 存储 API 的数组
 * @return {*|Promise}
 */
function save(data) {
  const values = data.split(os.EOL).map((item) => {
    return {
      ip: item.split(':')[0],
      port: item.split(':')[1],
      protocol: 'http',
      category: 'API', // 类别 高匿／透明／API(来自API)
    };
  });
  return ProxyModel.insertMany(values);
}


async function main() {
  try {
    const data = await getProxyFromAPI(config.API_URL);
    await save(data);
    logger.info('通过 API 提取代理完毕');
  } catch (error) {
    logger.error(`${new Date()} [error]: ${error.message} ${error.stack}`);
  }
}


module.exports = main;
