const path = require("path");

const config = {

entry: {home :'./main.js'},

output: {

  path: path.resolve(__dirname, "dist"),

  filename: "index.js"

},

module: {

  rules: [

    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react']
          }
        }
      ],
    }

]
}

};

 

module.exports = config;