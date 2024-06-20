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
    $regexp = '%<img[^>]*src="([^"]+)"[^>]*>%';

    // code below gets the first image from the description
    const regexp = /<img[^>]*src="([^"]+)"[^>]*>/;
    const matches = value.description.match(regexp);
    const image = matches[1];
    // this replaces the img tag with an empty string
    let content = value.description.replace(/<img[^>]*>/g, "");
    // we then slice the content to 700 characters
    const description = content.slice(0, 700);
    console.log(description);
    // if (value.title != null) {
    header.innerHTML += `
      <div class="all-contain">
          <div class="container">
            <a class="img-link" href="${value.link}">
              <img src="${image}" alt="article's thumbnail" />
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
    // } else {
    //   header.innerHTML += `
    //   <div class="all-contain">
    //       <div class="container">
    //         <a class="img-link" href="${value.link}">
    //           <img src="${value.thumbnail}" alt="project image" />
    //         </a>
    //         <div class="small-contain">
    //           <h2 class="title">${value.title}</h2>
    //           <p class="description">
    //             ${value.description}
    //           </p>
    //           <div class="buttons">
    //             <a href="${value.link}"><button class="source">Link to Article</button></a>
    //           </div>
    //         </div>
    //       </div>
    //       <hr class="line" />
    //     </div>`;
    // }
  }
}
