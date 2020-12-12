module.exports = {
    mode : "development",
    entry : {
        client : "./client/index.js"
    },
    output : {
        filename : "build.js"
    },
    resolve :{
        extensions : [".js", ".jsx"]
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                exclude : /(node_modules)/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
}