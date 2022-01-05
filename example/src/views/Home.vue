<template>
  <div id="main">
    <div class="header">
      <h2>ez-snow.js</h2>
      <h3>一個能快速製作下雪效果的套件</h3>
      <el-button
        plain
        @click="viewGitHubClick()"
      >view on GitHub</el-button>
    </div>

    <div class="content container">
      <h2 class="title">
        特點
      </h2>
      <ol class="specialPoint">
        <li>能夠簡單快速使用下雪特效。</li>
        <li>提供以NPM的方式安裝套件。</li>
        <li>能夠自定義速度與方向。</li>
      </ol>

      <h2 class="title">
        安裝
      </h2>
      <pre
        class="hljs"
        style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(68, 68, 68); color: rgb(221, 221, 221);"
      >$ npm <span class="hljs-selector-tag" style="color: rgb(255, 255, 255); font-weight: 700;">i</span> ez-snow.js</pre>
      <h2 class="title">
        使用
      </h2>
      <pre style='color:#000020;background:#f6f8ff;'>  <span style='color:#200080; font-weight:bold; '>import</span> ezSnow from <span style='color:#800000; '>'</span><span style='color:#1060b6; '>ez-snow.js</span><span style='color:#800000; '>'</span><span style='color:#406080; '>;</span>
  <span style='color:#3f7f8f; '>/**</span>
<span style='color:#3f7f8f; '>&#xa0;&#xa0;</span><span style='color:#7f9fbf; font-weight:bold; '>*</span><span style='color:#3f7f8f; '> </span><span style='color:#7f9fbf; font-weight:bold; '>@</span><span style='color:#3f7f8f; '>constructor</span>
<span style='color:#3f7f8f; '>&#xa0;&#xa0;</span><span style='color:#7f9fbf; font-weight:bold; '>*</span><span style='color:#3f7f8f; '> </span><span style='color:#7f9fbf; font-weight:bold; '>@param</span><span style='color:#3f7f8f; '> {string} appendDomName </span><span style='color:#7f9fbf; font-weight:bold; '>-</span><span style='color:#3f7f8f; '> DOM element.</span>
<span style='color:#3f7f8f; '>&#xa0;&#xa0;</span><span style='color:#7f9fbf; font-weight:bold; '>*</span><span style='color:#3f7f8f; '> </span><span style='color:#7f9fbf; font-weight:bold; '>@param</span><span style='color:#3f7f8f; '> {string} srcPath </span><span style='color:#7f9fbf; font-weight:bold; '>-</span><span style='color:#3f7f8f; '> Image path.</span>
<span style='color:#3f7f8f; '>&#xa0;&#xa0;*/</span>
  <span style='color:#200080; font-weight:bold; '>new</span> ezSnow<span style='color:#308080; '>(</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>body</span><span style='color:#800000; '>"</span><span style='color:#308080; '>,</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>./assets/image/snow2.png</span><span style='color:#800000; '>"</span><span style='color:#308080; '>)</span><span style='color:#308080; '>.</span>init<span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
</pre>
      <!--Created using ToHtml.com on 2019-09-22 13:09:28 UTC -->
      <h3>此頁面的body下雪效果,就是使用上述代碼!</h3>

      <h2 class="title">
        當螢幕大小發生變動時:
      </h2>
      <pre style='color:#000020;background:#f6f8ff;'>  <span style='color:#200080; font-weight:bold; '>var</span> ez<span style='color:#308080; '>=</span><span style='color:#200080; font-weight:bold; '>new</span> ezSnow<span style='color:#308080; '>(</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>body</span><span style='color:#800000; '>"</span><span style='color:#308080; '>,</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>./assets/image/snow2.png</span><span style='color:#800000; '>"</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>init<span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>

  window<span style='color:#308080; '>.</span>onresize<span style='color:#308080; '>=</span><span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#308080; '>=</span><span style='color:#308080; '>></span><span style='color:#406080; '>{</span>
    <span style='color:#200080; font-weight:bold; '>clearTimeout</span><span style='color:#308080; '>(</span>resizeTimer<span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
    <span style='color:#200080; font-weight:bold; '>var</span> resizeTimer<span style='color:#308080; '>=</span><span style='color:#200080; font-weight:bold; '>setTimeout</span><span style='color:#308080; '>(</span><span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#308080; '>=</span><span style='color:#308080; '>></span><span style='color:#406080; '>{</span>
      ez<span style='color:#308080; '>.</span>reInit<span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
    <span style='color:#406080; '>}</span><span style='color:#308080; '>,</span><span style='color:#008c00; '>250</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
  <span style='color:#406080; '>}</span>
</pre>
      <!--Created using ToHtml.com on 2019-09-22 13:08:33 UTC -->
      <h3>在視窗發生改變的事件中，呼叫reInit()函數,</h3>
      <h3>讓套件重新計算新的雪球位置,</h3>
      <h3>可以在本頁面中嘗試縮放網頁視窗。</h3>

      <h2 class="title">
        example 1 : Snowing
      </h2>
      <el-button
        v-if="!isShowBigSnow"
        class="showExampleBtn"
        plain
        size="medium"
        @click="showBigSnow()"
        type="primary"
      >Click Show</el-button>
      <div
        class="example1"
        v-if="isShowBigSnow"
      >
      </div>
      <pre style='color:#000020;background:#f6f8ff;'>  <span style='color:#200080; font-weight:bold; '>new</span> ezSnow<span style='color:#308080; '>(</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>.example1</span><span style='color:#800000; '>"</span><span style='color:#308080; '>,</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>./assets/image/snow.png</span><span style='color:#800000; '>"</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setScale<span style='color:#308080; '>(</span><span style='color:#008000; '>0.2</span><span style='color:#308080; '>,</span><span style='color:#008000; '>1.5</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setFullMode<span style='color:#308080; '>(</span><span style='color:#0f4d75; '>true</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setNum<span style='color:#308080; '>(</span><span style='color:#008c00; '>70</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>init<span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
</pre>
      <!--Created using ToHtml.com on 2019-09-22 13:07:33 UTC -->

      <h2 class="title">
        example 2 : Squirrel dancing
      </h2>
      <el-button
        v-if="!isShowCute"
        class="showExampleBtn"
        plain
        size="medium"
        @click="showCute()"
        type="primary"
      >Click Show</el-button>
      <div
        class="example2"
        v-if="isShowCute"
      >
      </div>
      <pre style='color:#000020;background:#f6f8ff;'>  <span style='color:#200080; font-weight:bold; '>new</span> ezSnow<span style='color:#308080; '>(</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>.example2</span><span style='color:#800000; '>"</span><span style='color:#308080; '>,</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>./assets/image/cute.gif</span><span style='color:#800000; '>"</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setFullMode<span style='color:#308080; '>(</span><span style='color:#0f4d75; '>true</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setNum<span style='color:#308080; '>(</span><span style='color:#008c00; '>10</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setAutoDirection<span style='color:#308080; '>(</span><span style='color:#0f4d75; '>false</span><span style='color:#308080; '>,</span><span style='color:#0f4d75; '>false</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setPhysics<span style='color:#308080; '>(</span><span style='color:#308080; '>[</span><span style='color:#008c00; '>1</span><span style='color:#308080; '>,</span><span style='color:#008c00; '>3</span><span style='color:#308080; '>]</span><span style='color:#308080; '>,</span><span style='color:#308080; '>[</span><span style='color:#008000; '>0.2</span><span style='color:#308080; '>,</span><span style='color:#008c00; '>3</span><span style='color:#308080; '>]</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setScale<span style='color:#308080; '>(</span><span style='color:#008000; '>0.6</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setLeaveFadeFactor<span style='color:#308080; '>(</span><span style='color:#008000; '>0.01</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setFadeOutDistance<span style='color:#308080; '>(</span><span style='color:#008c00; '>200</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>init<span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
</pre>
      <!--Created using ToHtml.com on 2019-09-22 13:07:10 UTC -->

      <h2 class="title">
        example 3 : Raining
      </h2>
      <el-button
        v-if="!isShowRain"
        class="showExampleBtn"
        plain
        size="medium"
        @click="showRain()"
        type="primary"
      >Click Show</el-button>
      <div
        class="example3"
        v-if="isShowRain"
      >
      </div>
      <pre style='color:#000020;background:#f6f8ff;'>  <span style='color:#200080; font-weight:bold; '>new</span> ezSnow<span style='color:#308080; '>(</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>.example3</span><span style='color:#800000; '>"</span><span style='color:#308080; '>,</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>./assets/image/rain.png</span><span style='color:#800000; '>"</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setFullMode<span style='color:#308080; '>(</span><span style='color:#0f4d75; '>true</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setNum<span style='color:#308080; '>(</span><span style='color:#008c00; '>60</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setAutoDirection<span style='color:#308080; '>(</span><span style='color:#0f4d75; '>false</span><span style='color:#308080; '>,</span><span style='color:#0f4d75; '>true</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setPhysics<span style='color:#308080; '>(</span><span style='color:#308080; '>[</span><span style='color:#008c00; '>1</span><span style='color:#308080; '>,</span><span style='color:#008c00; '>2</span><span style='color:#308080; '>]</span><span style='color:#308080; '>,</span><span style='color:#308080; '>[</span><span style='color:#008c00; '>1</span><span style='color:#308080; '>,</span><span style='color:#008c00; '>3</span><span style='color:#308080; '>]</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>setScale<span style='color:#308080; '>(</span><span style='color:#008c00; '>1</span><span style='color:#308080; '>,</span><span style='color:#008000; '>2.5</span><span style='color:#308080; '>)</span>
  <span style='color:#308080; '>.</span>init<span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
</pre>
      <!--Created using ToHtml.com on 2019-09-22 13:48:33 UTC -->

      <h2 class="title">
        example 4 : Rotate Star
      </h2>

      <el-button
        v-if="!isShowStar"
        class="showExampleBtn"
        plain
        size="medium"
        @click="showStar()"
        type="primary"
      >Click Show</el-button>
      <div
        class="example4"
        v-if="isShowStar"
      >
      </div>
      <pre style='color:#000020;background:#f6f8ff;'>    <span style='color:#200080; font-weight:bold; '>let</span> starDeg<span style='color:#308080; '>=</span><span style='color:#200080; font-weight:bold; '>new</span> <span style='color:#007d45; '>Array</span><span style='color:#308080; '>(</span><span style='color:#008c00; '>50</span><span style='color:#308080; '>)</span><span style='color:#308080; '>.</span>fill<span style='color:#308080; '>(</span><span style='color:#008c00; '>0</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
    <span style='color:#200080; font-weight:bold; '>new</span> ezSnow<span style='color:#308080; '>(</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>.example4</span><span style='color:#800000; '>"</span><span style='color:#308080; '>,</span><span style='color:#800000; '>"</span><span style='color:#1060b6; '>./assets/image/star.png</span><span style='color:#800000; '>"</span><span style='color:#308080; '>)</span>
    <span style='color:#308080; '>.</span>setFullMode<span style='color:#308080; '>(</span><span style='color:#0f4d75; '>true</span><span style='color:#308080; '>)</span>
    <span style='color:#308080; '>.</span>setNum<span style='color:#308080; '>(</span>starDeg<span style='color:#308080; '>.</span><span style='color:#200080; font-weight:bold; '>length</span><span style='color:#308080; '>)</span>
    <span style='color:#308080; '>.</span>setAutoDirection<span style='color:#308080; '>(</span><span style='color:#0f4d75; '>false</span><span style='color:#308080; '>,</span><span style='color:#0f4d75; '>false</span><span style='color:#308080; '>)</span>
    <span style='color:#308080; '>.</span>setPhysics<span style='color:#308080; '>(</span><span style='color:#008c00; '>0</span><span style='color:#308080; '>,</span><span style='color:#008c00; '>4</span><span style='color:#308080; '>)</span>
    <span style='color:#308080; '>.</span>setScale<span style='color:#308080; '>(</span><span style='color:#008000; '>0.5</span><span style='color:#308080; '>)</span>
    <span style='color:#308080; '>.</span>setCustomEvent<span style='color:#308080; '>(</span><span style='color:#308080; '>(</span>it<span style='color:#308080; '>,</span><span style='color:#007d45; '>index</span><span style='color:#308080; '>)</span><span style='color:#308080; '>=</span><span style='color:#308080; '>></span><span style='color:#406080; '>{</span>
      it<span style='color:#308080; '>.</span>style<span style='color:#308080; '>.</span>transform<span style='color:#308080; '>=</span>
        <span style='color:#800000; '>`</span><span style='color:#1060b6; '>rotate(</span><span style='color:#800000; '>${</span><span style='color:#007d45; '>starDeg</span><span style='color:#308080; '>[</span><span style='color:#007d45; '>index</span><span style='color:#308080; '>]</span><span style='color:#007d45; '> </span><span style='color:#308080; '>></span><span style='color:#007d45; '> </span><span style='color:#008c00; '>360</span><span style='color:#007d45; '> </span><span style='color:#406080; '>?</span><span style='color:#007d45; '> starDeg</span><span style='color:#308080; '>[</span><span style='color:#007d45; '>index</span><span style='color:#308080; '>]</span><span style='color:#308080; '>%=</span><span style='color:#008c00; '>360</span><span style='color:#007d45; '> </span><span style='color:#406080; '>:</span><span style='color:#007d45; '> starDeg</span><span style='color:#308080; '>[</span><span style='color:#007d45; '>index</span><span style='color:#308080; '>]</span><span style='color:#308080; '>+=</span><span style='color:#008c00; '>2</span><span style='color:#800000; '>}</span><span style='color:#1060b6; '>deg)</span><span style='color:#800000; '>`</span><span style='color:#406080; '>;</span>
    <span style='color:#406080; '>}</span><span style='color:#308080; '>)</span>
    <span style='color:#308080; '>.</span>init<span style='color:#308080; '>(</span><span style='color:#308080; '>)</span><span style='color:#406080; '>;</span>
</pre>
      <h1
        class="title"
        style="color:#b33030;"
      >
        (after equal version 2.0.3)
      </h1>
      <h2 class="title">
        example 5 : reverse
      </h2>
      <el-button
        v-if="!isShowReverse"
        class="showExampleBtn"
        plain
        size="medium"
        @click="showReverse()"
        type="primary"
      >Click Show</el-button>
      <div
        class="example5"
        v-if="isShowReverse"
      >
      </div>
      <pre
        class="javascript"
        style="font-family:monospace;"
      ><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">phyY</span><span style="color: #339933;">=</span><span style="color: #CC0000;">2</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">isShowReverse</span><span style="color: #339933;">=</span><span style="color: #003366; font-weight: bold;">true</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #000066; font-weight: bold;">this</span>.$nextTick<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">=&gt;</span><span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">reverse</span><span style="color: #339933;">=</span><span style="color: #000066; font-weight: bold;">new</span> ezSnow<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">&quot;.example5&quot;</span><span style="color: #339933;">,</span><span style="color: #3366CC;">&quot;./assets/image/fly.gif&quot;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  .<span style="color: #660066;">setNum</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">20</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  .<span style="color: #660066;">setPhysics</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">0</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">phyY</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  .<span style="color: #660066;">setFullMode</span><span style="color: #009900;">&#40;</span><span style="color: #003366; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  .<span style="color: #660066;">init</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">setInterval<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=&gt;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">phyY</span> <span style="color: #339933;">=</span> <span style="color: #CC0000;">0</span> <span style="color: #339933;">-</span> <span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">phyY</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">reverse</span>.<span style="color: #660066;">setPhysics</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">0</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">this</span>.<span style="color: #660066;">phyY</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span> <span style="color: #CC0000;">2000</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></div></li></ol></pre>

      <!--Created using ToHtml.com on 2019-09-22 13:05:15 UTC -->

      <h2 class="title">
        問題1:
      </h2>
      <h3>如果再vue-cli 2.x 打包時會出現 ERROR<br> in assets/js/vendor.de21e3800f4b42989ca9.js from UglifyJs
        Unexpected token: name (ezSnow)
      </h3>
      <h2 class="title">
        解法:
      </h2>
      <h3>
        打開webpack.base.conf 並在 module: { rules: [] }<br>
        rules裡添加
      </h3>
      <pre style='color:#000020;background:#f6f8ff;'>  <span style='color:#406080; '>{</span>
    <span style='color:#200080; font-weight:bold; '>test</span><span style='color:#308080; '>:</span><span style='color:#1060b6; '> </span><span style='color:#800000; '>/</span><span style='color:#0f69ff; '>\.</span><span style='color:#1060b6; '>js</span><span style='color:#308080; '>$</span><span style='color:#800000; '>/</span><span style='color:#308080; '>,</span>
    loader<span style='color:#406080; '>:</span> <span style='color:#800000; '>'</span><span style='color:#1060b6; '>babel-loader</span><span style='color:#800000; '>'</span><span style='color:#308080; '>,</span>
    include<span style='color:#406080; '>:</span> <span style='color:#308080; '>[</span>resolve<span style='color:#308080; '>(</span><span style='color:#800000; '>'</span><span style='color:#1060b6; '>node_modules/ez-snow.js</span><span style='color:#800000; '>'</span><span style='color:#308080; '>)</span><span style='color:#308080; '>]</span>
  <span style='color:#406080; '>}</span><span style='color:#308080; '>,</span>
</pre>
      <!--Created using ToHtml.com on 2019-09-22 13:10:03 UTC -->

      <h2 class="title">
        API:
      </h2>

      <!-- HTML generated using hilite.me -->
      <div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
        <pre style="margin: 0; line-height: 125%">   <span style="color: #008000">/**</span>
<span style="color: #008000">    * @constructor</span>
<span style="color: #008000">    * @param {string} appendDomName DOM element.</span>
<span style="color: #008000">    * @param {string} srcPath Image path.</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function destroy()</span>
<span style="color: #008000">    * 自我銷毀、並移除所有圖片，在vue使用時，記得在destroyed鉤子中，呼叫此函數。</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function reInit()</span>
<span style="color: #008000">    * 會先自我銷毀一次，再重新初始化一次。</span>
<span style="color: #008000">    * 可搭配視窗大小縮放事件</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      this.resizeTimer=null;</span>
<span style="color: #008000">      window.onresize=()=&gt;{</span>
<span style="color: #008000">        clearTimeout(this.resizeTimer);</span>
<span style="color: #008000">        this.resizeTimer=setTimeout(()=&gt;{</span>
<span style="color: #008000">          ez.reInit();</span>
<span style="color: #008000">        },250);</span>
<span style="color: #008000">      }</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setFullMode(isFullMode)</span>
<span style="color: #008000">    * 設定出生位置是否全屏</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {boolean} isFullMode @default false</span>
<span style="color: #008000">      *   true  : 全屏隨機出生</span>
<span style="color: #008000">      *   false : 最上邊出生</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setNum(snowSum)</span>
<span style="color: #008000">    * 設定產生的圖片數量</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {number} snowSum @default 10</span>
<span style="color: #008000">      * 可以填入你想要出現多少個圖片在畫面上</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setOpacity(fade)</span>
<span style="color: #008000">    * 圖片透明細數</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {number} fade @default 1 @range 0~1</span>
<span style="color: #008000">      * 數值範圍區間0~1,數值越小越透明</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setLeaveFadeFactor(fadeFactor)</span>
<span style="color: #008000">    * 當圖片落到底時,透明淡出效果係數</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {number} fadeFactor @default 0.05</span>
<span style="color: #008000">      * 數值越小淡出效果越久，反之越快</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setFadeOutDistance(distance)</span>
<span style="color: #008000">    * 在圖片離最下方到一定距離時，開始透明淡出效果</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {number} distance @default 50</span>
<span style="color: #008000">      * 單位為px像素，數值越小效果越慢出現，反之越快出現</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setAutoDirection(isRandDireciotn,directionWay)</span>
<span style="color: #008000">    * 設定是否隨機轉向飄</span>
<span style="color: #008000">    *</span>
<span style="color: #008000">      * @param {boolean} isRandDireciotn @default true</span>
<span style="color: #008000">      * 是否開啟隨機轉向飄</span>
<span style="color: #008000">      * 若為true,@directionWay 可以不用傳參數</span>
<span style="color: #008000">      * </span>
<span style="color: #008000">      * 若為false,@directionWay 一定要傳參數,指定飄的方向</span>
<span style="color: #008000">      * @param {boolean} directionWay @default true</span>
<span style="color: #008000">      * true : 飄向左邊  </span>
<span style="color: #008000">      * false : 飄向右邊</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setScale(ScaleMin,ScaleMax)</span>
<span style="color: #008000">    * 設定隨機縮放係數</span>
<span style="color: #008000">    * 縮放係數0.5時,代表大小縮小一半</span>
<span style="color: #008000">    * 縮放係數1時,代表原始大小</span>
<span style="color: #008000">    * 縮放係數2時,代表大小放大兩倍</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * 若兩個參數都為0,則不縮放。</span>
<span style="color: #008000">      * @param {number} ScaleMin @default 0</span>
<span style="color: #008000">      * 隨機產生的最小係數</span>
<span style="color: #008000">      * @param {number} ScaleMax @default 0</span>
<span style="color: #008000">      * 隨機產生的最大係數</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setScale(Scale)</span>
<span style="color: #008000">    * 指定縮放大小 </span>
<span style="color: #008000">    * 縮放係數0.5時,代表大小縮小一半</span>
<span style="color: #008000">    * 縮放係數1時,代表原始大小</span>
<span style="color: #008000">    * 縮放係數2時,代表大小放大兩倍</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {number} Scale @default 0</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setPhysics(Vx,Vy)</span>
<span style="color: #008000">    * 控制x軸速度係數與控制y軸速度係數 </span>
<span style="color: #008000">    * 係數越大速度越快</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {number} Vx @default 0.1</span>
<span style="color: #008000">      * x係數值</span>
<span style="color: #008000">      * @param {number} Vy @default [0.1,0.35]</span>
<span style="color: #008000">      * y係數值</span>
<span style="color: #008000">    */</span>

    <span style="color: #008000">/** @function setPhysics(Vx,Vy)</span>
<span style="color: #008000">    * 隨機產生 x軸速度係數 和 y軸速度係數 </span>
<span style="color: #008000">    * 係數越大速度越快</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">      * @param {array} Vx @default 0.1</span>
<span style="color: #008000">      * Vx[0] : x係數隨機最小值</span>
<span style="color: #008000">      * Vx[1] : x係數隨機最大值</span>
<span style="color: #008000">      * @param {array} Vy @default [0.1,0.35]</span>
<span style="color: #008000">      * Vy[0] : y係數隨機最小值</span>
<span style="color: #008000">      * Vy[1] : y係數隨機最大值</span>
<span style="color: #008000">    * </span>
<span style="color: #008000">    */</span>
</pre>
      </div>

    </div>

    <div class="footer">
      ez-snow.js 由 Majitoo 編寫
    </div>
  </div>
</template>

<script>
import ezSnow from 'ez-snow.js';
export default {
  data() {
    return {
      ez:null,
      cute:null,
      bigSnow:null,
      rain:null,
      star:null,
      reverse:null,
      resizeTimer:null,
      isShowCute:false,
      isShowBigSnow:false,
      isShowRain:false,
      isShowStar:false,
      isShowReverse:false,
      starDeg:new Array(50).fill(0),
    };
  },
  created() {
 
  },
  destroyed() {
    if(this.ez!=null)
      this.ez.destroy();
    if(this.cute!=null)
      this.cute.destroy();
    if(this.rain!=null)
      this.rain.destroy();
    if(this.star!=null)
      this.star.destroy();
    clearTimeout(this.resizeTimer);
    window.onresize=null;
  },
  mounted() {
    console.log("update");
    this.ez=new ezSnow("body",require("@/assets/image/snow2.png")).init();

    this.resizeTimer=null;
    window.onresize=()=>{
      clearTimeout(this.resizeTimer);
      this.resizeTimer=setTimeout(()=>{
        this.ez.reInit();
      },250);
    }

    /**
    * @constructor
    * @param {string} appendDomName DOM element.
    * @param {string} srcPath Image path.
    */

    /** @function destroy()
    * 自我銷毀、並移除所有圖片，在vue使用時，記得在destroyed鉤子中，呼叫此函數。
    */

    /** @function reInit()
    * 會先自我銷毀一次，再重新初始化一次。
    * 可搭配視窗大小縮放事件
    * 
      this.resizeTimer=null;
      window.onresize=()=>{
        clearTimeout(this.resizeTimer);
        this.resizeTimer=setTimeout(()=>{
          ez.reInit();
        },250);
      }
    */

    /** @function setFullMode(isFullMode)
    * 設定出生位置是否全屏
    * 
      * @param {boolean} isFullMode @default false
      *   true  : 全屏隨機出生
      *   false : 最上邊出生
    */

    /** @function setNum(snowSum)
    * 設定產生的圖片數量
    * 
      * @param {number} snowSum @default 10
      * 可以填入你想要出現多少個圖片在畫面上
    */

    /** @function setOpacity(fade)
    * 圖片透明細數
    * 
      * @param {number} fade @default 1 @range 0~1
      * 數值範圍區間0~1,數值越小越透明
    */

    /** @function setLeaveFadeFactor(fadeFactor)
    * 當圖片落到底時,透明淡出效果係數
    * 
      * @param {number} fadeFactor @default 0.05
      * 數值越小淡出效果越久，反之越快
    */

    /** @function setFadeOutDistance(distance)
    * 在圖片離最下方到一定距離時，開始透明淡出效果
    * 
      * @param {number} distance @default 50
      * 單位為px像素，數值越小效果越慢出現，反之越快出現
    */

    /** @function setAutoDirection(isRandDireciotn,directionWay)
    * 設定是否隨機轉向飄
    *
      * @param {boolean} isRandDireciotn @default true
      * 是否開啟隨機轉向飄
      * 若為true,@directionWay 可以不用傳參數
      * 
      * 若為false,@directionWay 一定要傳參數,指定飄的方向
      * @param {boolean} directionWay @default true
      * true : 飄向左邊  
      * false : 飄向右邊
    */

    /** @function setScale(ScaleMin,ScaleMax)
    * 設定隨機縮放係數
    * 縮放係數0.5時,代表大小縮小一半
    * 縮放係數1時,代表原始大小
    * 縮放係數2時,代表大小放大兩倍
    * 
      * 若兩個參數都為0,則不縮放。
      * @param {number} ScaleMin @default 0
      * 隨機產生的最小係數
      * @param {number} ScaleMax @default 0
      * 隨機產生的最大係數
    */

    /** @function setScale(Scale)
    * 指定縮放大小 
    * 縮放係數0.5時,代表大小縮小一半
    * 縮放係數1時,代表原始大小
    * 縮放係數2時,代表大小放大兩倍
    * 
      * @param {number} Scale @default 0
    */

    /** @function setPhysics(Vx,Vy)
    * 控制x軸速度係數與控制y軸速度係數 
    * 係數越大速度越快
    * 
      * @param {number} Vx @default 0.1
      * x係數值
      * @param {number} Vy @default [0.1,0.35]
      * y係數值
    */

    /** @function setPhysics(Vx,Vy)
    * 隨機產生 x軸速度係數 和 y軸速度係數 
    * 係數越大速度越快
    * 
      * @param {array} Vx @default 0.1
      * Vx[0] : x係數隨機最小值
      * Vx[1] : x係數隨機最大值
      * @param {array} Vy @default [0.1,0.35]
      * Vy[0] : y係數隨機最小值
      * Vy[1] : y係數隨機最大值
    * 

    */
  },
  methods:{
    viewGitHubClick(){
      window.open('https://github.com/jimmyy512/ez-snow.js');
    },
    showBigSnow(){
      this.isShowBigSnow=true;

      this.$nextTick(()=>{
        this.bigSnow=new ezSnow(".example1",require("@/assets/image/snow.png"))
        .setScale(0.2,1.5)
        .setFullMode(true)
        .setNum(70)
        .init();
      })
    },
    showCute(){
      this.isShowCute=true;

      this.$nextTick(()=>{
        this.cute=new ezSnow(".example2",require("@/assets/image/cute.gif"))
        .setFullMode(true)
        .setNum(10)
        .setAutoDirection(false,false)
        .setPhysics([1,3],[0.2,3])
        .setScale(0.6)
        .setLeaveFadeFactor(0.01)
        .setFadeOutDistance(200)
        .init();
      })
    },
    showRain(){
      this.isShowRain=true;

      this.$nextTick(()=>{
        this.rain=new ezSnow(".example3",require("@/assets/image/rain.png"))
        .setFullMode(true)
        .setNum(60)
        .setAutoDirection(false,true)
        .setPhysics([1,2],[1,3])
        .setScale(1,2.5)
        .init();
      })
    },
    showStar(){
      this.isShowStar=true;
      this.$nextTick(()=>{
        this.star=new ezSnow(".example4",require("@/assets/image/star.png"))
        .setFullMode(true)
        .setNum(this.starDeg.length)
        .setAutoDirection(false,false)
        .setPhysics(0,4)
        .setScale(0.5)
        .setCustomEvent((it,index)=>{
          it.style.transform=
            `rotate(${this.starDeg[index] > 360 ? this.starDeg[index]%=360 : this.starDeg[index]+=2}deg)`;
        })
        .init();
      })
    },
    showReverse(){
      this.phyY=2;
      this.isShowReverse=true;
      this.$nextTick(()=>{
        this.reverse=new ezSnow(".example5",require("@/assets/image/fly.gif"))
        .setNum(20)
        .setPhysics(0, this.phyY)
        .setFullMode(true)
        .init();
      })

      setInterval(() => {
        this.phyY = 0 - this.phyY;
        this.reverse.setPhysics(0, this.phyY);
      }, 2000);
    },
  }
};
</script>

<style lang="scss">
@import "../style/mixin.scss";

.hljs {
  text-align: left;
}
.header {
  text-align: center;
  padding: 30px;
  color: whitesmoke;
  background: #3868ab;
  background-image: linear-gradient(120deg, #3868ab, #9a5b4d);
  h2 {
    margin-top: 0px;
    font-size: 2rem;
  }
}

.content {
  color: #606c71;
  font-weight: 500;
  h3 {
    margin: 10px;
    padding-left: 10px;
  }
  .title {
    color: #528aa0;
    margin-top: 35px;
  }
  .specialPoint {
    li {
      padding: 10px;
    }
  }
  .example1,
  .example2,
  .example3,
  .example4,
  .example5,
  .example6,
  .example7,
  .example8,
  .example9,
  .example10 {
    width: 100%;
    height: 500px;
    background: rgb(40, 43, 46);
  }
  .showExampleBtn {
    margin: 15px;
  }
}

.footer {
  background-color: #f1f1f1;
  color: gray;
  padding: 20px;
  text-align: center;
}
</style>