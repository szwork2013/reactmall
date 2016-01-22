**reactmall —— 基于React的电商WebApp演示系统**

# 如何集成到Ningx？ #
1. 在hosts文件中添加如下域名
```
127.0.0.1 dev.reactmall.com
```
2. 编辑Nginx的`nginx.conf`文件，添加如下配置
```py
server {
    listen       80;
    server_name  dev.reactmall.com;

    #charset koi8-r;

    #access_log  logs/reactmall.access.log  main;
    location /static {
        root d:/reactmall/reactmall/; #换成自己的目录
    }
    
    location / {
        proxy_pass http://127.0.0.1:3001;
    }
    
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

# 如何在本地开发调试？ #

答：初次搭建环境，按如下步骤：
1. 执行node init_mall_data.js
2. 执行`cnpm install -g browser-sync`安装`browser-sync`
3. 启动start_server.bat
4. 启动nginx
5. 启动start_browser_sync.bat

start_browser_sync.bat运行后，会自动打开浏览器，访问`http://localhost:3002/`，这时，就能看到商品列表了

`browser_sync是一个用于对浏览器页面进行live reload的机制，当我们在后台修改了.css, .html, .js文件后，浏览器会自动进行刷新，不用再按F5`