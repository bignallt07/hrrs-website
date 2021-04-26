// List of blogs created from data

const mainDiv = document.querySelector("#blog-list");

for (let i = 0; i < blogs.length; i++) {
    let div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
        <div class="row">
            <div class="col-4">
                <img src=${blogs[i].thumbnail} alt="Blog Thumbnail">
                <p>Author: ${blogs[i].author}</p>
            </div>
            <div class="col-8">
                <h3>${blogs[i].title}</h3>
                <div class="paragraphs">
                <p>${blogs[i].bio.one}</p>
                <p>${blogs[i].bio.two}</p>
                </div>
                <a href="${blogs[i].pageLink}" class="btn-secondary">Continue Reading...</a>
            </div>
        </div>`;
    mainDiv.append(div);
}






