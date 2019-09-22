# Effect:
![image](https://github.com/jimmyy512/ImageAssets/blob/master/ezSnow/snowGif.gif)
# Demo:  
<https://jimmyy512.github.io/ez-snow.js-demo>
# install
$ npm i ez-snow.js

# How to use?  

* @constructor  
* @param {string} appendDomName - DOM element.  
* @param {string} srcPath - Image path.  

import ezSnow from 'ez-snow.js';   
new ezSnow("body","Image Path").init();  

and then you can see effect on your dom!
# question:  
in VueCli 2.X npm run build   
have this error:  

ERROR in assets/js/vendor.d03d5552b04b91ec1879.js from UglifyJs  
Unexpected token: name (ezSnow)...    

# solution:  
open build/webpack.base.config.js file  
rules array add  
{  
&emsp;test: /\.js$/,  
&emsp;loader: 'babel-loader',  
&emsp;include: [resolve('node_modules/ez-snow.js')]  
}  