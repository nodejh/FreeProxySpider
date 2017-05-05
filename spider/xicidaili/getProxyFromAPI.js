// 通过 API 提取代理
// http://www.xicidaili.com/api
// 本月API提取地址：
// API链接中的IP地址每15分钟更新一次，因此不建议频繁读取API，15分钟来读取一次即可。
// http://api.xicidaili.com/free2016.txt
const superagent = require('superagent');
// const cheerio = require('cheerio');
const config = require('./config');
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


function saveToDB() {

}


async function main() {
  try {
    const proxies = await getProxyFromAPI(config.API_URL);
  } catch (error) {
    logger.error(`${new Date()} [error]: ${error.message} ${error.stack}`);
  }
}

main();
