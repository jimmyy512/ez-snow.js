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
    this.snowSum = 50;
    this.isFullMode = true;
    this.isFadeMode = true;
    this.Scale=1.0;
    this.RandScaleMode=true;
    this.ScaleMax=null;
    this.ScaleMin=null;
  }

  init() {
    if (this._isInit) {
      console.warn(
        "init fail!!! already init,if you want reinit plz call destroy() before init()!"
      );
      return;
    }

    for (let i = 0; i < this.snowSum; i++) {
      let randSizeScale=Math.random() * this.ScaleMax + this.ScaleMin;
      let snow = document.createElement("div");
      snow.style.position = "absolute";
      snow.style.backgroundSize="contain";
      snow.className = this._snowName;
      snow.innerText = "";

      if(this.RandScaleMode)
      {
        snow.style.width=`${this._bgWidth*randSizeScale}px`;
        snow.style.height=`${this._bgHeight*randSizeScale}px`;
      }
      else
      {
        snow.style.width=`${this._bgWidth}px`;
        snow.style.height=`${this._bgHeight}px`;
      }
      
      snow.ezSnow = {
        sizeScale:randSizeScale,
        pos: {
          x: Math.random() * this._appendDom.clientWidth + 1,
          y: this.isFullMode
            ? Math.random() * this._appendDom.clientHeight + 1
            : 0
        },
        phy: {
          vX: Math.random() * 0.4 + 0.1,
          vY: Math.random() * 0.4 + 0.2
        },
        _reverseJudge: Math.floor(Math.random() * 2000) + 200,
        _reverseDirection: Math.floor(Math.random() * 2),
        _reverseCount: 0
      };
      this._appendDom.appendChild(snow);
      this._snows.push(snow);
    }

    this.callRequestAnimationFrame();

    this._isInit = true;
    return this;
  }

  setAutoScale(RandScaleMode,ScaleMax=1.5,ScaleMin=0.5)
  {
    if(typeof RandScaleMode !== "boolean")
    {
      console.warn("setAutoScale fail,need boolean param!");
      return;
    }
    this.RandScaleMode=RandScaleMode;
    this.ScaleMax=ScaleMax;
    this.ScaleMin=ScaleMin;
    return this;
  }
  
  setFullMode(isFullMode)
  {
    if(typeof isFullMode !== "boolean")
    {
      console.warn("setFullMode fail,need boolean param!");
      return;
    }
    this.isFullMode=isFullMode;  
    return this;
  }

  setSnowSum(snowSum)
  {
    if(typeof snowSum !== "number")
    {
      console.warn("snowSum fail,need number param!");
      return;
    }
    this.snowSum=snowSum;
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

  callRequestAnimationFrame() {
    this._RAF = requestAnimationFrame(() => {
      this.callRequestAnimationFrame();
      let fpsInterval = 1000 / this._const_FPS;
      let now = Date.now();
      let elapsed = now - this._RAF_then;
      if (elapsed > fpsInterval) {
        this._snows.forEach((it, index) => {
          let W = this._appendDom.clientWidth - it.offsetWidth;
          let H = this._appendDom.clientHeight - it.offsetHeight;

          it.style.left = Math.random() * W;
          it.style.top = Math.random() * H;

          if (
            it.ezSnow._reverseCount >= it.ezSnow._reverseJudge &&
            Math.floor(Math.random() * 2)
          ) {
            it.ezSnow._reverseCount = 0;
            it.ezSnow._reverseDirection = !it.ezSnow._reverseDirection;
          } else it.ezSnow._reverseCount++;

          let { phy } = it.ezSnow;
          let newVX = phy.vX;
          if (it.ezSnow._reverseDirection) newVX = 0 - phy.vX;
          let { pos } = it.ezSnow;
          it.style.left = pos.x + newVX + "px";
          it.style.top = pos.y + phy.vY + "px";
          pos.x += newVX;
          pos.y += phy.vY;
          if (pos.y > H) {
            it.style.top = 0;
            pos.y = 0;
          }
          if (pos.x > W || pos.x < 0 - this._bgWidth * it.ezSnow.sizeScale)
            this.resetPos(it);
        });
        this._RAF_then = now - (elapsed % fpsInterval);
      }
    });
  }

  _clearAllSnow() {
    this._snows.forEach((it, index) => {
      this._appendDom.removeChild(it);
    });
    this._snows.length = 0;
  }

  resetPos(snow) {
    let newPosX = Math.random() * this._appendDom.clientWidth + 1;
    let newPosY = 0;
    snow.ezSnow.pos.x = newPosX;
    snow.ezSnow.pos.y = newPosY;
    snow.style.left = newPosX;
    snow.style.top = newPosY;
  }
}

export default {ezSnow};