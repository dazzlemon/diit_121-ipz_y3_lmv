const path = require('path');
const { override, addBabelPlugins, babelInclude } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  babelInclude([
    path.resolve(__dirname, 'node_modules/react-native-gifted-chat'),
    path.resolve(__dirname, 'node_modules/react-native-parsed-text'),
    path.resolve(__dirname, 'node_modules/react-native-typing-animation'),
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-markdown-package'),
    path.resolve(__dirname, 'node_modules/react-native-gifted-chat/lib'),
    path.resolve(__dirname, 'src'),
  ]),
);
