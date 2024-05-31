module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    '@babel/plugin-transform-logical-assignment-operators',
    '@babel/plugin-transform-optional-chaining',
    '@babel/plugin-transform-object-rest-spread',
    '@babel/plugin-transform-async-generator-functions',
    'react-native-reanimated/plugin',
   
  ],
};
