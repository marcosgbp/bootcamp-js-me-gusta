
function incrementLike(element){
    if(element.getAttribute('id')==="btn-like-1"){

        let count_like_1 = parseInt(document.querySelector("#count-like-1").innerHTML) + 1
        document.querySelector("#count-like-1").innerHTML = count_like_1;

    }else if(element.getAttribute('id')==="btn-like-2"){

        let count_like_2 = parseInt(document.querySelector("#count-like-2").innerHTML) + 1
        document.querySelector("#count-like-2").innerHTML = count_like_2;

    }else{

        let count_like_3 = parseInt(document.querySelector("#count-like-3").innerHTML) + 1
        document.querySelector("#count-like-3").innerHTML = count_like_3;

    }
}