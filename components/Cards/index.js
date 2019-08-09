// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(function(data){
    const articles = data.data.articles
    const articlesContainer = document.querySelector('.cards-container')
        Object.keys(articles).forEach(function(article) {
            const allArticles = articles[article]
            allArticles.forEach(function(currentArticle) {

                //creating elements
                const card = document.createElement('div')
                const cardHeadline = document.createElement('div')
                const cardAuthor = document.createElement('div')
                const imgContainer = document.createElement('div')
                const cardImg = document.createElement('img')
                const cardName = document.createElement('span')

                // creating classes/style
                card.classList.add('card')
                cardHeadline.classList.add('headline')
                cardAuthor.classList.add('author')
                imgContainer.classList.add('img-container')

                cardHeadline.textContent = currentArticle.headline 
                cardImg.src = currentArticle.authorPhoto
                cardName.textContent = currentArticle.authorName

                //appending children
                card.append(cardHeadline)
                card.appendChild(cardAuthor)
                cardAuthor.appendChild(imgContainer)
                cardAuthor.appendChild(cardName)
                imgContainer.appendChild(cardImg)

                articlesContainer.appendChild(card)
            })
        })
})