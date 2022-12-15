$(document).ready(function () {
    $("button").on("click", function () {
        character = Math.floor(Math.random() * 88) + 1
        $.get(`https://akabab.github.io/starwars-api/api/id/${character}.json`, function (data) {
            $("#name").html(data['name'])
            const $img = $("img");
            $img.attr("src", data['image'])


        })
    })
})