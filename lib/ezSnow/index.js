class ezSnow {
  constructor(appendDomName = "body", srcPath) {
    var img = new Image();
    img.src=srcPath;
    if(img.width==0)
    {
      img.onload=()=>{
        this._bgWidth=img.width;
        this._bgHeight=img.height;
        this.init();
      }
    }

    this._imgs = new Array();
    this._srcPath=srcPath;
    this._isInit = false;
    this._appendDom = document.querySelector(appendDomName);
    this._appendDom.style.position = "relative";
    this._RAF = null;
    this._RAF_then = null;
    this._const_FPS = 60;
    this._bgWidth=img.width;
    this._bgHeight=img.height;
    this._imgSum = 10;
    this._isFullMode = true;
    this._ScaleMax=0;
    this._ScaleMin=0;
    this._phyVx=0.1;
    this._phyVy=[0.1,0.35];
    this._isRandDireciotn=true;
    this._directionWay=true;
    this._startFadeOutDistance=50;
    this._fadeFactor = 0.05;
    this._startFade=1;
    this.customEvent=null;
  }

  init() {
    if(this._bgWidth==0)
      return this;
    if (this._isInit) {
      this._warnTip("init","if you want reinit plz call destroy() before init()!!");
      return;
    }

    for (let i = 0; i < this._imgSum; i++) {
      let randSizeScale=1
      if( this._ScaleMax===0 && this._ScaleMin===0 )
        randSizeScale=1;
      else if(this._ScaleMax!==0 && this._ScaleMin===0)
        randSizeScale=this._ScaleMax;
      else
        randSizeScale=Math.random() * this._ScaleMax + this._ScaleMin;

      let img = document.createElement("img");
      img.style.position = "absolute";
      img.style.backgroundSize="contain";
      img.style.pointerEvents="none";
      img.src=this._srcPath;
      img.innerText = "";
      img.style.width=`${this._bgWidth*randSizeScale}px`;
      img.style.height=`${this._bgHeight*randSizeScale}px`;
      img.style.opacity=0;
      
      img.ezSnow = {
        opacity: 0,
        sizeScale:randSizeScale,
        pos: {
          x: Math.random() * this._appendDom.clientWidth + 1,
          y: this.isFullMode
            ? Math.random() * this._appendDom.clientHeight + 1
            : 0
        },
        phy: {
          vX: Array.isArray(this._phyVx)
            ? Math.random() * this._phyVx[1] + this._phyVx[0] 
            : this._phyVx,
          vY: Array.isArray(this._phyVy)
            ? Math.random() * this._phyVy[1] + this._phyVy[0] 
            : this._phyVy
        },
        _reverseJudge: Math.floor(Math.random() * 2000) + 200,
        _reverseDirection: this._isRandDireciotn ? Math.floor(Math.random() * 2) : this._directionWay,
        _reverseCount: 0,
      };
      this._appendDom.appendChild(img);
      this._imgs.push(img);
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
        this._imgs.forEach((it, index) => {
          let { phy } = it.ezSnow;
          let { pos } = it.ezSnow;

          if(this._appendDom.clientHeight - this._bgHeight - pos.y < this._startFadeOutDistance)
          {
            it.ezSnow.opacity -= this._fadeFactor;
            if(it.ezSnow.opacity<0)
              it.ezSnow.opacity=0
            it.style.opacity=it.ezSnow.opacity;
          }
          else if(it.ezSnow.opacity < this._startFade)
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

          let newVX = phy.vX;
          if (it.ezSnow._reverseDirection) 
            newVX = 0 - phy.vX;
          
          it.style.left = pos.x + newVX + "px";
          it.style.top = pos.y + phy.vY + "px";
          pos.x += newVX;
          pos.y += phy.vY;
          
          if (pos.y > this._appendDom.clientHeight - (this._bgHeight * it.ezSnow.sizeScale)) {
            it.style.top = 0;
            pos.y = 0;
            it.ezSnow.opacity=0;
            it.style.opacity=0;
          }
          if (
            pos.x > this._appendDom.clientWidth - (this._bgWidth * it.ezSnow.sizeScale) ||
            pos.x < 0)
            this.resetPos(it);

          if(this.customEvent!==null)
            this.customEvent(it,index);
        });
        this._RAF_then = now - (elapsed % fpsInterval);
      }
    });
  }

  setAutoDirection(isRandDireciotn,directionWay)
  {
    if(
    typeof isRandDireciotn !== "boolean")
    {
      this._warnTip("setDirection","param need boolean,directionWay:true,snow will float right.");
      return;
    }
    if(!isRandDireciotn)
      this._directionWay=directionWay;
    this._isRandDireciotn=isRandDireciotn;
    return this;
  }

  setScale(ScaleMin=0,ScaleMax=0)
  {
    if(
      typeof ScaleMax!=="number" ||
      typeof ScaleMin!=="number"
    )
    {
      this._warnTip("setScale","ScaleMax、ScaleMin need number.");
      return;
    }

    this._ScaleMax=ScaleMax;
    this._ScaleMin=ScaleMin;
    return this;
  }
  
  setPhysics(Vx=this._phyVx,Vy=this._phyVy)
  {
    this._phyVx=Vx;
    this._phyVy=Vy
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

  setNum(snowSum)
  {
    if(typeof snowSum !== "number")
    {
      this._warnTip("setNum","param need number ");
      return;
    }
    this._imgSum=snowSum;
    return this;
  }

  setOpacity(fade){
    if(typeof fade !== "number")
    {
      this._warnTip("setOpacity","param need number ");
      return;
    }
    this._startFade=fade;
    return this;
  }

  setLeaveFadeFactor(fadeFactor)
  {
    if(typeof fadeFactor !== "number")
    {
      this._warnTip("setLeaveFadeFactor","param need number.");
      return;
    }
    this._fadeFactor=fadeFactor;
    return this;
  }

  setFadeOutDistance(distance)
  {
    if(typeof distance !== "number")
    {
      this._warnTip("setFadeOutDistance","param need number.");
      return;
    }
    this._startFadeOutDistance=distance;
    return this;
  }

  setCustomEvent(event)
  {
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
    this._imgs.forEach((it, index) => {
      this._appendDom.removeChild(it);
    });
    this._imgs.length = 0;
  }

  _warnTip(functionName,content){
    console.error(`ezSnow.js error! ${functionName} fail,${content}`)
  }

  resetPos(snow) {
    let newPosX;
    newPosX = Math.random() * this._appendDom.clientWidth - (this._bgWidth*snow.ezSnow.sizeScale);
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

module.exports=ezSnow;