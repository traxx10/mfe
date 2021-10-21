module.exports = {
  module: {
    rules: [
      //NOTE:  This rule says that whenever we import a file that ends with an extention of m or js, that we want babel to process it seperately
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // NOTE: This would process all the jsx tags that we have
            presets: ['@babel/preset-react', '@babel/preset-env'],

            // NOTE: It transforms and adds additioanl config to our code eg async await syntax
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
