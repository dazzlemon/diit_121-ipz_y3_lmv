const { override, addBabelPreset} = require("customize-cra");
const path = require("path");
  
module.exports = override(
    addBabelPreset("@babel/preset-react")
);