## Free Proxy Spider

爬取免费代理：

- [XiciDaili.com](http://www.xicidaili.com/nn/)

## 架构

程序分为两部分

1. Spider
2. Check 

#### 1. Spider

爬取代理

#### 2. Check

验证代理是否符合要求，通过访问固定网页来判断。

Check 的时候 Check 三次，每成功一次，count++。最后删除 count < 2 的记录。


## STATUS

开发中...