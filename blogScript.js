const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ashish080303";
fetch(mediumURL)
  .then((response) => response.json())
  .then((json) => addMedium(json));

const header = document.querySelector("#header-blogs");
function addMedium(json) {
  console.log(json);
  const image = json.feed.image;
  const link = json.feed.link;
  const blogs = json.items;
  const posts = blogs.filter((post) => post.categories.length > 0);
  console.log(image, link, blogs, posts);
  addHtml(blogs, image);
}

function addHtml(array = blogs, image) {
  for (var i = 0; i < array.length; i++) {
    let value = array[i];
    const description = value.description.slice(0, 300);
    console.log(description);
    if (value.title != null) {
      header.innerHTML += `
      <div class="all-contain">
          <div class="container">
            <a class="img-link" href="${value.link}">
              <img src="${value.thumbnail}" alt="project image" />
            </a>
            <div class="small-contain">
              <h2 class="title">${value.title}</h2>
              <p class="description">
                ${description}
              </p>
              <div class="buttons">
              <a href="${value.link}"><button class="live">Link to Article</button></a>
              </div>
            </div>
          </div>
          <hr class="line" />
        </div>`;
    } else {
      header.innerHTML += `
      <div class="all-contain">
          <div class="container">
            <a class="img-link" href="${value.link}">
              <img src="${value.thumbnail}" alt="project image" />
            </a>
            <div class="small-contain">
              <h2 class="title">${value.title}</h2>
              <p class="description">
                ${value.description}
              </p>
              <div class="buttons">
                <a href="${value.link}"><button class="source">Link to Article</button></a>
              </div>
            </div>
          </div>
          <hr class="line" />
        </div>`;
    }
  }
}
