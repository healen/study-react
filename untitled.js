module.exports={
     devtool: 'eval-source-map',
    //这是一个主文件 包括其他的模块
    entry:'./src/main.js',
    // 编译完的文件路径
    output:{
        //文件夹
        path:__dirname+'./dist',
        publicPath:'dist/',
        //文件 即是 ./dist/build.js
        filename:'build.js'

    },
    module:{
        //编译规则
        rules:[{
            //让webpack去验证文件是否是.js 结尾的将其转换
            test:/\.js$/,
            //通过babel 转换
            loader:'babel-loader',
            //node_modules 不用转换
            exclude:/node_modules/,
           query:{
                    presets:['es2015']
                }

        },
        {
            //让webpack 去验证.vue结尾的将其转换
            test:/\.vue$/,
            //通过vue 转换
            loader:'vue-loader!babel-loader',
            query:{
                    presets:['es2015']
            }
        }
        ]
    }

    /*vue:{
        loaders:{
            js:'babel'
        }
    }*/
};