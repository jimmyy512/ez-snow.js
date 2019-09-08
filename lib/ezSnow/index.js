class ezSnow {
  constructor(appendDomName = "body", snowName = "snow", bgWidth,bgHeight) {
    this._snows = new Array();
    this._snowName = snowName;
    this._isInit = false;
    this._appendDom = document.querySelector(appendDomName);
    this._appendDom.style.position = "relative";
    this._RAF = null;
    this._RAF_then = null;
    this._const_FPS = 60;
    this._bgWidth=bgWidth;
    this._bgHeight=bgHeight;
    this._snowSum = 10;
    this._isFullMode = true;
    this._fadeFactor=0.02;
    this._RandScaleMode=true;
    this._ScaleMax=1.5;
    this._ScaleMin=0.5;
    this._ResetMode="Random";
    this._isPhyRandom=true;
    this._phyRandomMaxVx=0.4;
    this._phyRandomMinVx=0.1;
    this._phyRandomMaxVy=0.4;
    this._phyRandomMinVy=0.2;
    this._phyAssignVx=0;
    this._phyAssignVy=0.2;
    this._isRandDireciotn=true;
    this._directionWay=true;
    this.customEvent=null;
  }

  init() {
    if (this._isInit) {
      this._warnTip("init","if you want reinit plz call destroy() before init()!!");
      return;
    }

    for (let i = 0; i < this._snowSum; i++) {
      let randSizeScale=Math.random() * this._ScaleMax + this._ScaleMin;
      let snow = document.createElement("div");
      snow.style.position = "absolute";
      snow.style.backgroundSize="contain";
      snow.className = this._snowName;
      snow.innerText = "";

      if(this._RandScaleMode)
      {
        snow.style.width=`${this._bgWidth*randSizeScale}px`;
        snow.style.height=`${this._bgHeight*randSizeScale}px`;
      }
      else
      {
        snow.style.width=`${this._bgWidth}px`;
        snow.style.height=`${this._bgHeight}px`;
      }

      snow.style.opacity=0;
      
      snow.ezSnow = {
        opacity: 0,
        sizeScale:randSizeScale,
        pos: {
          x: Math.random() * this._appendDom.clientWidth + 1,
          y: this.isFullMode
            ? Math.random() * this._appendDom.clientHeight + 1
            : 0
        },
        phy: {
          vX: this._isPhyRandom
            ? Math.random() * this._phyRandomMaxVx + this._phyRandomMinVx 
            : this._phyAssignVx,
          vY: this._isPhyRandom
            ? Math.random() * this._phyRandomMaxVy + this._phyRandomMinVy 
            : this._phyAssignVy,
        },
        _reverseJudge: Math.floor(Math.random() * 2000) + 200,
        _reverseDirection: this._isRandDireciotn ? Math.floor(Math.random() * 2) : this._directionWay,
        _reverseCount: 0,
      };
      this._appendDom.appendChild(snow);
      this._snows.push(snow);
    }

    this.callRequestAnimationFrame();

    this._isInit = true;
    return this;
  }

  callRequestAnimationFrame() {
    this._RAF = requestAnimationFrame(() => {
      this.callRequestAnimationFrame();
      let fpsInterval = 1000 / this._const_FPS;
      let now = Date.now();
      let elapsed = now - this._RAF_then;
      if (elapsed > fpsInterval) {
        this._snows.forEach((it, index) => {
          if(it.ezSnow.opacity<1)
          {
            it.ezSnow.opacity+=this._fadeFactor;
            it.style.opacity=it.ezSnow.opacity;
          }

          if(this._isRandDireciotn)
          {
            if (
              it.ezSnow._reverseCount >= it.ezSnow._reverseJudge &&
              Math.floor(Math.random() * 2)
            ) {
              it.ezSnow._reverseCount = 0;
              it.ezSnow._reverseDirection = !it.ezSnow._reverseDirection;
            } else it.ezSnow._reverseCount++;
          }

          let { phy } = it.ezSnow;
          let newVX = phy.vX;
          
          if (it.ezSnow._reverseDirection) 
            newVX = 0 - phy.vX;
          let { pos } = it.ezSnow;
          it.style.left = pos.x + newVX + "px";
          it.style.top = pos.y + phy.vY + "px";
          pos.x += newVX;
          pos.y += phy.vY;
          if (pos.y > this._appendDom.clientHeight + it.offsetHeight) {
            it.style.top = 0;
            pos.y = 0;
            it.ezSnow.opacity=0;
            it.style.opacity=0;
          }
          if (pos.x > this._appendDom.clientWidth || pos.x < 0 - this._bgWidth * it.ezSnow.sizeScale)
            this.resetPos(it);

          if(this.customEvent!==null)
            this.customEvent(it,index);
        });
        this._RAF_then = now - (elapsed % fpsInterval);
      }
    });
  }

  setDirection(isRandDireciotn,directionWay=true)
  {
    if(
    typeof isRandDireciotn !== "boolean" ||
    typeof directionWay !== "boolean")
    {
      this._warnTip("setDirection","param need boolean,directionWay:true,snow will float right.");
      return;
    }
    if(!isRandDireciotn)
      this._directionWay=directionWay;
    this._isRandDireciotn=isRandDireciotn;
    return this;
  }

  setAutoScale(RandScaleMode,ScaleMax,ScaleMin)
  {
    if(typeof RandScaleMode !== "boolean")
    {
      this._warnTip("setAutoScale","param need boolean.");
      return;
    }
    if(
      typeof ScaleMax!=="number" ||
      typeof ScaleMin!=="number"
    )
    {
      this._warnTip("setAutoScale","ScaleMax、ScaleMin need number.");
      return;
    }
    this._RandScaleMode=RandScaleMode;
    this._ScaleMax=ScaleMax;
    this._ScaleMin=ScaleMin;
    return this;
  }
  
  setPhysics(isPhyRandom,Vx,Vy)
  {
    if(typeof isPhyRandom!=="boolean")
      this._warnTip("setPhysics","param isPhyRandom need boolean.");
    if(isPhyRandom)
    {
      if(
        !Array.isArray(Vx) ||
        !Array.isArray(Vy) ||
        Vx.length!=2 ||
        Vy.length!=2
      )
      {
        this._warnTip("setPhysics","Vx Vy need Array param, Vx:[MaxRandom,MinRandom]  Vy:[MaxRandom,MinRandom].")
        return;
      }
      this._phyRandomMaxVx=Vx[0];
      this._phyRandomMinVx=Vx[1];
      this._phyRandomMaxVy=Vy[0];
      this._phyRandomMinVy=Vy[1];
    }
    else
    {
      if(
        typeof Vx ===undefined ||
        typeof Vy ===undefined)
      {
        this._warnTip("setPhysics","Vx Vy is undefined.")
        return;
      }
      this._phyAssignVx=Vx;
      this._phyAssignVy=Vy;
    }
    this._isPhyRandom=isPhyRandom;
    return this;
  }
  
  setFullMode(isFullMode)
  {
    if(typeof isFullMode !== "boolean")
    {
      this._warnTip("setFullMode","param need boolean.");
      return;
    }
    this.isFullMode=isFullMode;  
    return this;
  }

  setSnowSum(snowSum)
  {
    if(typeof snowSum !== "number")
    {
      this._warnTip("setSnowSum","param need number ");
      return;
    }
    this._snowSum=snowSum;
    return this;
  }

  setResetMode(ResetMode)
  {
    if(ResetMode==="Random" ||
    ResetMode==="Diagonal")
    {
      this._ResetMode=ResetMode;
      return this;
    }
    else
    {
      this._warnTip("setResetMode","param need string type 'Random' or 'Diagonal'.");
      return;
    }
  }

  setFadeFactor(fadeFactor)
  {
    if(typeof fadeFactor !== "number")
    {
      this._warnTip("setFadeFactor","param need number.");
      return;
    }
    this._fadeFactor=fadeFactor;
    return this;
  }

  setCustomEvent(event)
  {
    console.log(typeof event);
    if(typeof event !== "function")
    {
      this._warnTip("setCustomEvent","param need function.");
      return
    }
    this.customEvent=event;
    return this;
  }

  destroy() {
    cancelAnimationFrame(this._RAF);
    this._clearAllSnow();
    this._isInit = false;
  }

  reInit(){
    this.destroy();
    this.init();
  }

  _clearAllSnow() {
    this._snows.forEach((it, index) => {
      this._appendDom.removeChild(it);
    });
    this._snows.length = 0;
  }

  _warnTip(functionName,content){
    console.error(`ezSnow.js error! ${functionName} fail,${content}`)
  }

  resetPos(snow) {
    let newPosX;
    if(this._ResetMode==="Diagonal")
      newPosX = this._appendDom.clientWidth - Math.abs(snow.ezSnow.pos.x);
    else
      newPosX = Math.random() * this._appendDom.clientWidth + 1;
    let newPosY = 0;
    snow.ezSnow.pos.x = newPosX;
    snow.ezSnow.pos.y = newPosY;
    snow.style.left = newPosX;
    snow.style.top = newPosY;
    snow.ezSnow._reverseCount=0;
    snow.ezSnow.opacity=0;
    snow.style.opacity=0;
  }
}

export default ezSnow;