const mongoose = require('./../db/mongoose');

const Schema = mongoose.Schema;
const proxyUnCheckedSchema = new Schema({
  ip: String,
  port: String,
  category: String, // 类别 高匿／透明／未知(如来自API)
  checkCount: { type: Number, default: 0 }, // 检测次数
  checkDate: { type: Date, default: Date.now }, // 检测日期
  date: { type: Date, default: Date.now }, // 爬取日期
});


const ProxyUnChecked = mongoose.model('proxyUnChecked', proxyUnCheckedSchema);


module.exports = ProxyUnChecked;
