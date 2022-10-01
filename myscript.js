
console.log("working properly");

let newCard = document.getElementById('newCard');

const xhr = new XMLHttpRequest();

xhr.open('GET', `
https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5208f8b04e904c249ba16fbe4179f612`, true);

xhr.onload = function() {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newHtml = "";
        articles.forEach(function(element) {
            let news = `<div class="card" id="newCard">
                            <div class="card-body">
                                  <h5 class="card-title">${element["title"]}</h5>
                                  <p class="card-text">${element["description"]}</p>
                                  <a href="${element["url"]} target="_blank" class="btn btn-primary">Read More</a>
                            </div>
                            </div>
                        `
            newHtml += news;
        });
        newCard.innerHTML = newHtml;
    }
    else{
        console.log("some error occured");
    }
}

xhr.send()
