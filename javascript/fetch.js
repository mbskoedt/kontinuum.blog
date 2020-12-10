"use strict";

// fetch data from WP

fetch("https://blog.kontinuum.one/wp-json/wp/v2/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
  });

function appendPosts(posts) {
  for (let post of posts) {


    if (`${post.acf.main_hashtag}` === "post") {

      document.querySelector("#content-subnav").innerHTML += `
      <li> <a id="${post.id}" onclick="subNavRedirect(this)">${post.title.rendered}</a> </li>
  `;

      document.querySelector("#grid-container").innerHTML += `
      <div id="fb-root">
  <div id="unique-${post.id}" class="box post-box">

  <div class="black-header-box">
  <h3>${post.title.rendered}</h3>
  </div>

  <section class="box-information">
  <h6 class="post-date"> Published: ${post.acf.date_for_publish} </h6>
  <h5 class="post-hashtags"> ${post.acf.add_hashtags} </h5>
  </section>

  <section class="article-content">${post.content.rendered}</section>
  `;

    }

    if (`${post.acf.main_hashtag}` === "aboutMenuTab") {
      document.querySelector("#about-container").innerHTML += `
      <div class="sub-tabs-container">
      <h3>${post.title.rendered}</h3>
      <div class="sub-tabs-content">
    <section class="article-content">${post.content.rendered}</section>
    </div>
    </div>
`;
    }
    if (`${post.acf.main_hashtag}` === "contactMenuTab") {
      document.querySelector("#contact-container").innerHTML += `
      <div class="sub-tabs-container">
      <h3>${post.title.rendered}</h3>
      <div class="sub-tabs-content">
    <section class="article-content">${post.content.rendered}</section>
    </div>
    </div>
    `;
    }
  }
}
