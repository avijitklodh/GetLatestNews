console.log("hits")

let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7c34501c42254e17b1eba16b6d376e8a';
let req = new Request(url);

asyncCall();

    async function asyncCall(){
        let response = await fetch(req);
        let newsObj = await response.json();
        console.log(newsObj);
        newsDiv.innerHTML = ""
        // console.log(newsObj.articles.length);
        newsDiv = document.getElementById("newsDiv")
        for(i=0;i<15;i++){
            newsDiv.innerHTML += `<div id = "newsBox" ><div id = "imageDiv">
            <img id = "newsImage" src="${newsObj.articles[i].urlToImage}"> 
            </div>

            <div id = "dataDiv">
            <h4><a href="${newsObj.articles[i].url}">${newsObj.articles[i].title}</a></h4>
            <h5>${newsObj.articles[i].author}</h5>
            <p>${newsObj.articles[i].description}</p>
            </div>
            </div>
            `

            console.log(newsObj.articles[i].title);
        }
    }

    const newsBtn = document.getElementById("newsBtn");

    newsBtn.addEventListener('click',asyncCall );





