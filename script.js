const header = document.querySelector('#header-project');

fetch('./projectsData.json')
.then((response)=>response.json())
.then((json)=> addHtml(json));


// addHtml(); 
function addHtml(json){
  const array = json.array; 

  for(var i=0; i<array.length; i++){
    let value = array[i];
    if (value.liveDemo == null) {
      
      header.innerHTML += `
      <div class="all-contain">
          <div class="container">
            <a class="img-link" href="${value.liveDemo}">
              <img src="${value.imgLink}" alt="project image" />
            </a>
            <div class="small-contain">
              <h2 class="title">${value.title}</h2>
              <p class="description">
                ${value.description}
              </p>
              <div class="buttons">
                <a href="${value.srcCode}"><button class="live">Source Code</button></a>
                <button class="source">Live Demo : Not available yet </button>
              </div>
            </div>
          </div>
          <hr class="line" />
        </div>`
      } else {
      header.innerHTML += `
      <div class="all-contain">
          <div class="container">
            <a class="img-link" href="${value.liveDemo}">
              <img src="${value.imgLink}" alt="project image" />
            </a>
            <div class="small-contain">
              <h2 class="title">${value.title}</h2>
              <p class="description">
                ${value.description}
              </p>
              <div class="buttons">
                <a href="${value.srcCode}"><button class="live">Source Code</button></a>
                <a href="${value.liveDemo}"><button class="source">Live Demo</button></a>
              </div>
            </div>
          </div>
          <hr class="line" />
        </div>`
      
    }
  }
}