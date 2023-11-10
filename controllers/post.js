const posts = require("../db/post.json");
  
function index(req, res) {
    res.format({
      html: () => {
        const html = [`<h1>Lista dei post</h1>`];
  
        html.push("<ul>");
  
        for (const post of posts) {
          html.push(`<li>
            <h3>${post.title}</h3>
            <img src="" alt="" style="width: 100px">
            <p>${post.content}</p>
            <p>${post.tag}</p>
          </li>`);
        }
  
        html.push("</ul>");
  
        res.send(html.join(""));
      }, 
      json: () => {
        res.type("json").send({
          totalElements: posts.length,
          list: posts
        });
      }
    })
  }
  
  module.exports = {
    index,
  }