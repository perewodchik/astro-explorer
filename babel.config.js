module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
          'module-resolver',
          {
            alias: {
              'root': './',
              'src': './src',
              '@shared': './src/shared',
              '@app': './src/app',
              '@entities': './src/entities',
              '@features': './src/features',
              '@pages': './src/pages'
            },
          },
        ],
      ],
  };
};
