const getProxyFromAPI = require('./spider/xicidaili/getProxyFromAPI');

async function main() {
  try {
    await getProxyFromAPI();
    console.log('aaaa');
  } catch (e) {
    console.log('e: ', e);
  }
}


main();
