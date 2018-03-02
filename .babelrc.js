module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            '> 1%',
            'last 3 chrome versions',
            'last 3 firefox versions',
          ],
        },
      },
    ],
    '@babel/stage-3',
    '@babel/react',
  ],
};
