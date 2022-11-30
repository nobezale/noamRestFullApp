const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/backend_mongo", {
      target: "http://192.168.43.7:5000/mongo_db/", // API endpoint 1 to machine api
      changeOrigin: true,
      pathRewrite: {
        "^/backend_mongo": "",
      },
      headers: {
        Connection: "keep-alive",
      },
    })
  );
};
//in order to run locally-
//in retminal:
//export REACT_APP_ENV=dev
//export REACT_APP_REGION=eu-central-1
//export REACT_APP_CLIENT=customer1
