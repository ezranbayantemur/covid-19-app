module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@style': './src/style',
          '@types': './src/types',
          '@api': './src/redux/api',
        },
      },
    ],
  ],
};
