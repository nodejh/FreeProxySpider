const mongoose = require('./../db/mongoose');

const Schema = mongoose.Schema;
const proxySchema = new Schema({
  ip: String,
  port: Number,
  protocol: String,
  category: String, // 类别 高匿／透明／未知(如来自API)
  checkedCount: { type: Number, default: 0 }, // 检测通过次数
  checkedCountDate: { type: Date, default: Date.now }, // 检测时间
  date: { type: Date, default: Date.now }, // 存入日期
});


const Proxy = mongoose.model('proxies', proxySchema);


module.exports = Proxy;
