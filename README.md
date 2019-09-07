# install
npm install git+https://github.com/jimmyy512/ezSnow.js.git

# How to use?  

import ezSnow from 'ezSnow';

#``css style  ``  
.snow{  
  background:url("../../assets/image/taiwan.png");  
}  

#``Example 1``  
@param 1:Append Snow Effect in which DOM.  
@param 2:snow class name,can add image here.  
@param 3:snow image width.  
@param 4:snow image height.  
let ezSnow=new ezSnow(".secondIntro","snow",36,24).init();  



#``Example 2``  
this.ezSnow=new ezSnow(".secondIntro","snow",36,24)  
.setSnowSum(10)  
.setFullMode(true)  
.setAutoScale(true)  
.init();  

@param (number) : Generate snow sum.  
setSnowSum(snowSum)  

@param (boolean) : Snow start position is cover full screen.  
setFullMode(isFullMode)  

@param (boolean) : Is enable random scale.  
@param (number) : max scale.  
@param (number) : min scale.  
setAutoScale(true,1.5,0.5)