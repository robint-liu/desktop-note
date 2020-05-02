# desktop-note

## 项目文档

项目名称：_桌面记_

项目简介：_桌面记，建立在本地的个人桌面随手记。_

项目版本：_0.0.1_

项目技术栈：_electron + vue + vue-antd + vuex + vue-router + local 存储 + 文件操作等等。_

项目描述：

        项目整体暂分为四大模块，待办事项、我的备忘、桌面助手，
        
        代办事项：对任务的增删改查；
        
        我的备忘：对我的备忘的增删改查
        
        桌面助手：对桌面壁纸的替换，支持线上查找
        
        关于桌面记：对桌面记历史的时间线记载
            
相关命令：

        help: "webpack -h",
        clear: "rm -rf dist",
        server: "webpack-dev-server --host 0.0.0.0  --config ./config/webpack.dev.config.js --progress --colors --profile",
        dev: "cross-env NODE_ENV=development yarn server",
        dev_proxy: "cross-env NODE_ENV=proxy yarn server",
        dev_pro: "cross-env NODE_ENV=production yarn server",
        build_dev: "cross-env NODE_ENV=development webpack --config ./config/webpack.dev.config.js --progress --colors",
        build_pro: "cross-env NODE_ENV=production && webpack --config ./config/webpack.pro.config.js --progress --colors",
        start: "electron .",
        start_dev: "cross-env NODE_ENV=development run-p dev start",
        start_proxy: "cross-env NODE_ENV=proxy run-p dev_proxy start",
        start_pro: "cross-env NODE_ENV=production run-p dev_pro start",
        mac: "electron-builder --mac --x64",
        win: "electron-builder --win --x64 --ia32",
        builder: "run-p mac win",
        lint: "vue-cli-service lint",
        serve: "vue-cli-service serve",
        "test:e2e": "vue-cli-service test:e2e"

