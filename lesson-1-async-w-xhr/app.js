(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        /** 
        const imageRequest = new XMLHttpRequest();
        imageRequest.onload = addImage;
        
        imageRequest.onerror = function(err){
            requestError(err,'image');
        };
         imageRequest.open('GET',`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        
        imageRequest.setRequestHeader('Authorization','Client-ID 1ac41a92a154469b7b9a4c201edb906a7427ab329f21aa8f68dd9777038cfc49');
        imageRequest.send();
        function addImage(){

            let htmlContent = '';
            const data = JSON.parse(this.responseText);

            if(data && data.results && data.results[0]){
                const firstImage = data.results[0];
                htmlContent = `<figure>
                    <img src="${firstImage.urls.regular}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                    </figure>`;
            }else
            {
                htmlContent='<div class="error-no-image"> No images available</div>';
            }
            responseContainer.insertAdjacentHTML('afterbegin',htmlContent);
        }
        */
/*
        const articleRequest = new XMLHttpRequest();
        articleRequest.onload = addArticle;
        articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=ccc75b773c1b423c99f4bed905338c33`);
        articleRequest.send();
        function addArticle(){
            let htmlContent = '';
            const data = JSON.parse(this.responseText);

            if(data.response && data.response.docs && data.response.docs.length> 1 ){
                htmlContent = '<ul>'+ data.response.docs.map(article => `<li class="article">
               <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
               <p>${article.snippet}</p>
               </li>`
                ).join('') + '</ul>';
            } else{
                htmlContent = '<div class="error-no-articles">No articles vailable</div>';
            }
            responseContainer.insertAdjacentHTML('beforeend',htmlContent);
        }
         });
        */
/** 
        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
        
        headers:
    {
            Authorization : 'Client-ID 1ac41a92a154469b7b9a4c201edb906a7427ab329f21aa8f68dd9777038cfc49'
    }
}).done(addImage);
   


    function addImage(images) {
        const firstImage = images.results[0];
       
           responseContainer.insertAdjacentHTML('afterbegin',`<figure>
                    <img src="${firstImage.urls.small}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                    </figure>`);
        
    }
  
    **/

    /**
    
    $.ajax({
        url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=ccc75b773c1b423c99f4bed905338c33`
    }).done(addArticle);

    function addArticle(articles){
        responseContainer.insertAdjacentHTML('beforeend', '<ul>' + articles.response.docs.map(article => `<li class="article">
               <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
               <p>${article.snippet}</p>
               </li>`
        ).join('') + '</ul>');
        
    }

    **/
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
            headers: {
                Authorization: 'Client-ID 1ac41a92a154469b7b9a4c201edb906a7427ab329f21aa8f68dd9777038cfc49'
            }
        }).then(response => response.json())
            .then(addImage)
            .catch(e => requestError(e, 'image'));

        function addImage(data) {
            let htmlContent = '';
            const firstImage = data.results[0];

            if (firstImage) {
                htmlContent = `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`;
            } else {
                htmlContent = 'Unfortunately, no image was returned for your search.'
            }

            responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
        }

        function requestError(e, part) {
            console.log(e);
            responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
        }
    });
})();
