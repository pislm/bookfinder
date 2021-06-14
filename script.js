$(document).ready(function () {
    $("#search").click(function () {
        $("#searchresults").empty()
        var bookTitle = $("#booktitle").val()
        var googleBooksAPI = "https://www.googleapis.com/books/v1/volumes?q=" + bookTitle
        $.getJSON(googleBooksAPI, function (response) {
            for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i]
                var card = `
                <div class="card" style="width: 18rem;">
                    <img src="${item.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.volumeInfo.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.volumeInfo.authors}</h6>
                        <p class="card-text">${item.volumeInfo.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                `
                $("#searchresults").append(card)
            }
        })
    })
})