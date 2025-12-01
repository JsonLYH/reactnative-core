module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/assets': './src/assets',
          '@/config': './src/config',
          '@/models': './src/models',
          '@/pages': './src/pages',
          '@/navigator': './src/navigator',
          '@/components': './src/components',
          '@/store': './src/store'
        },
      },
    ],
  ],
};
