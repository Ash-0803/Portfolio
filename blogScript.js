const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashish080303";
fetch(mediumURL)
.then((response)=>response.json())
.then((json)=> addMedium(json));

function addMedium(json){
  const image = json.feed.image;
  const link = json.feed.link;
  const blogs = json.items;
  const posts = blogs.filter((post) => post.categories.length >0);
}
