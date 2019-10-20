# desktop-note

## 项目文档

项目名称：_桌面记_

项目简介：_桌面记，建立在本地的个人桌面随手记。_

项目版本：_0.0.1_

项目技术栈：_electron + vue + vue-antd + vuex + vue-router + local 存储 + 文件操作等等_

项目描述：

            项目整体暂分为四大模块，待办事项、我的备忘、桌面助手，

            代办事项：对任务的增删改查；
            
            我的备忘：对我的备忘的增删改查
            
            桌面助手：对桌面壁纸的替换，支持线上查找
            
            关于桌面记：对桌面记历史的时间线记载
            
项目里程碑：

            0919：定稿，发一版
            1007：开发代办事项和关于桌面记, (由于个人delay，实际完成时间：1020)
            1025：处理本地存储和文件上传
            1031：我的备忘
            1110：全部开发完毕
            1118：内测、发版
            
注释：
        
            所有数据均存储在本地 indexedDB(非关系型数据库、兼容性好、支持离线操作)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

