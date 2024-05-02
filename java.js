let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
let url = "https://meme-api.com/gimme/";

let subreddits= ["me_irl", "whenthe", "DankMemesFromSite19", "HistoryMemes","ItemShop"];

let getMeme = () => {
        let randomSubreddit = subreddits[Math.floor(Math.random () * subreddits.length)];
       
     fetch(url + randomSubreddit)
     .then(resp => resp.json())
     .then((data) => {
        console.log(data);
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
        };
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.table;
        };
        memeImg.src = data.url;
    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);