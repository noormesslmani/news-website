const news= document.getElementById('news')

let newssection
$(document).ready(() => {
    $.ajax({
        type: "GET",
        url: "http://localhost/news/backend/selectnews.php",
        dataType: "html",
        success: (json) => {
        let data = JSON.parse(json);
        for (newsdetails of data){
            console.log(newsdetails.time)
            newssection= `<div class="col-lg-4 news ">
            <div class="title">${newsdetails.title}</div>
            <div class="type">${newsdetails.type}</div>
            <div class="contents">${newsdetails.contents}</div>
            <div class="date">${newsdetails.time}</div>
            </div>` 
        news.innerHTML+= newssection}
        console.log(data);}
    })
})