const Path = require("path");
const glob = require("glob");
const apiFiles = glob.sync(Path.resolve(__dirname, "./") + "/**/[!_]*.js", {
  nodir: true
});

console.log(apiFiles)
/**
 * apiFiles 會是
 * [
 *  'C:/progs/jsonServer/fake/comments.js',
 *  'C:/progs/jsonServer/fake/db.js',
 *  'C:/progs/jsonServer/fake/index.js',
 *  'C:/progs/jsonServer/fake/posts.js',
 *  'C:/progs/jsonServer/fake/profile.js'
 *  ]
 */

let data = {};

apiFiles.forEach(filePath => {
  const api = require(filePath);
  let [, url] = filePath.split("jsonServerData/"); // e.g. comments.js
  url =
    url.slice(url) === "index.js"
      ? null // remove 'index.js'
      : url.slice(0, url.length - 3); // remove '.js'
  if (url) data[url] = api;
});

console.log(data)
/**
 * data會是
 * { 'comments': [ { id: 1, body: 'some comment', postId: 1 } ],
 * db: [Function (anonymous)],
 * index: {},
 * posts: [ { id: 1, title: 'json-server', author: 'typicode' } ],
 * profile: { name: 'typicode' }
 */

module.exports = () => {
  return data;
};