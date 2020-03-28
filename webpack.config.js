const path = require("path");

const config = {

entry :{app:'./src/App.js'},

output: {

  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')

},
devServer: {
  open: true,
  compress :true
},

module: {
  
  rules: [
    {
      test: /\.css$/i,
      use:[
        {loader : 'style-loader' },
        {loader : 'css-loader'}
      ]
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
