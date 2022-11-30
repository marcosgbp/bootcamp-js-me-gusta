function incrementLike(){
    let like = parseInt(document.querySelector("#count-like").innerHTML)+1;
    document.querySelector("#count-like").innerHTML = like;
}