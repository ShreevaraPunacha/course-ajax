(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        const imageRequest = new XMLHttpRequest();
        imageRequest.onload = addImage;
        imageRequest.onerror = function(err){
            requestError(err,'image');
        };
        imageRequest.open('GET',`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        imageRequest.setRequestHeader('Authorization','Client-ID 1ac41a92a154469b7b9a4c201edb906a7427ab329f21aa8f68dd9777038cfc49');
        imageRequest.send();
        function addImage(){
            
            
        }
    });
})();
