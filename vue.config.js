module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:3100",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}