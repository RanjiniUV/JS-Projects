const path = require("path");

const config = {

entry: {home :'./main.js'},

output: {

  filename: "index.js"

},
devServer: {
  open: true
},

module: {
  
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
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