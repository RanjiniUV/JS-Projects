const path = require("path");

const config = {
  mode :'none',

entry :{app:'./src/App.js'},

output: {

  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')

},
devServer: {
  open: true
},

module: {
  
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use:[
        {loader : 'style-loader' },
        {loader : 'css-loader'},
        {loader : 'sass-loader'}
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
