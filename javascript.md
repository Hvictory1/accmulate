### JavaScript规定了几种语言类型
 8种：number undefined string boolean null symbol object bigInt 

### JavaScript对象的底层数据结构是什么
引用类型以及基础类型  
1. 引用数据类型存储在栈和堆中。具体来说就是引用数据类型的指针存储在栈中
2. 基本数据类型存储在栈中，每种类型的数据占用内存空间的大小是确定的，并由系统自动分配和释放

### vue2.0 上传图片input @change 
1.选择同一个图片时@change只会触发一次，添加key 触发一次递增即可

### 手写async await https://juejin.cn/post/6844904102053281806
`function asyncToGenerator(generatorFunc) {
    return function() {
      const gen = generatorFunc.apply(this, arguments)
      return new Promise((resolve, reject) => {
        function step(key, arg) {
          let generatorResult
          try {
            generatorResult = gen[key](arg)
          } catch (error) {
            return reject(error)
          }
          const { value, done } = generatorResult
          if (done) {
            return resolve(value)
          } else {
            return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
          }
        }
        step("next")
      })
    }
}
`

### 域名 dns 服务器
域名用来代替难以记住的ip地址，dns是将域名转化为ip地址的系统，dns服务器分为根域名、顶级域名、权威域名服务器。
解析过程是从浏览器缓存 -> 操作系统缓存 -> 本地dns服务器 -> 递归查询逐级查询上面所说服务器

### 浏览器加载顺序
典型的加载顺序示意
1.浏览器开始解析HTML，构建DOM。
2.碰到外部CSS，停止构建DOM，下载并解析CSS。
3.碰到JavaScript：
  若是同步脚本，停止解析HTML，下载并执行脚本。
  若是async或defer脚本，继续解析HTML。
4.当DOM和CSSOM构建完毕后，开始构建渲染树并绘制页面。
5.异步资源（如图像）加载完成后，更新页面。

浏览器加载顺序遵循HTML解析、CSS解析、JavaScript执行、渲染的流程。通过合理使用async和defer、优化资源加载顺序，可以提升页面的加载性能和用户体验。
