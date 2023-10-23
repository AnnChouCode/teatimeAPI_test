// db.js
// 必須是回傳一個return物件的function
// module.exports = () => ({
//     posts: [{ id: 1, title: "json-server", author: "typicode" }],
//     comments: [{ id: 1, body: "some comment", postId: 1 }],
//     profile: { name: "typicode" }
//   });

const groupingData = require("./groupingData");
const oderInfo = require("./oderInfo");
const ratingData = require("./ratingData");
const restaurantInfo = require("./restaurantInfo");
const userData = require("./userData");
const votingData = require("./votingData");
module.exports = () => ({
  groupingData,
  oderInfo,
  ratingData,
  restaurantInfo,
  userData,
  votingData
});