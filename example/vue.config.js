
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    // eslint錯誤,不會使得編譯失敗
    lintOnSave: false,
    indexPath: "../index.html",
    outputDir: '../exampleDist',
    publicPath: "./exampleDist"
  }

}
else {
  module.exports = {
    // eslint錯誤,不會使得編譯失敗
    lintOnSave: false,
  }
}
