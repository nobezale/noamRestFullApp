// const { createProxyMiddleware } = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware("/backend_mongo", {
//       target: "", // API endpoint 1 to machine api
//       changeOrigin: true,
//       pathRewrite: {
//         "^/MachineApi": "http://192.168.43.7:5000/mongo_db/",
//       },
//       headers: {
//         Connection: "keep-alive",
//       },
//     })
//   );
// };
// //in order to run locally-
// //in retminal:
// //export REACT_APP_ENV=dev
// //export REACT_APP_REGION=eu-central-1
// //export REACT_APP_CLIENT=customer1
