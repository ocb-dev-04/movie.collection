window.onload= function (){
    addAllFun();     
}

// add all function
function addAllFun(){
    addLastMovies();
    writeAlphabet();
    addAllMovies();
}

//charge last movie
function addLastMovies(){
    lastMovies = [
        'avenger-iw',
        'cm',
        'ff8',
        'pr',
        'skywraper'
    ];
    for(var cont = 0; cont <5;cont++){
        $('.last_container').append("<div class='split_container'><img src='./src/img/"+ lastMovies[cont] +".jpg'></div>");
    }

}

//create the alphabet
function writeAlphabet(){
    
    var arr = ['a','z'];
    for(var i = arr[0].charCodeAt(); i <= arr[1].charCodeAt(); i++ )
    {
        var C = [~~(Math.random() * 255),~~(Math.random() * 255),~~(Math.random() * 255)];
        $('.letters').append("<p><a href=>"+String.fromCharCode(i).toUpperCase()+"</a></p>" );
    }
}

function addAllMovies(){
    document.write("AllMovies");
}