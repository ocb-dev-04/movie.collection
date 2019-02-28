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

    // this array will simulate an API response
    lastMovies = [
        'avenger-iw',
        'cm',
        'ff8',
        'pr',
        'skywraper'
    ];
    for(var cont = 0; cont <5;cont++){
        $('.last_container').append("<div class='split_container'><img src='./src/img/lastMovies/"+ lastMovies[cont] +".jpg'></div>");
    }

}

//create the alphabet
function writeAlphabet(){
    
    //this is simple array
    var arr = ['a','z'];
    for(var i = arr[0].charCodeAt(); i <= arr[1].charCodeAt(); i++ )
    {
        var C = [~~(Math.random() * 255),~~(Math.random() * 255),~~(Math.random() * 255)];
        $('.letters').append("<p><a href=>"+String.fromCharCode(i).toUpperCase()+"</a></p>" );
    }
}

function addAllMovies(){
    // this array will simulate an API response
    movieImg = [
        'am',
        'ca',
        'cw',
        'im1',
        'im3',
        'sc',
        't1',
        't2',
        't3',
        't4'
    ];

    movieTitle =[
        'Ant Man',
        'Capitan America',
        'Civil War',
        'Iron Man',
        'Iron Man 3',
        'Sarah Connor Cronicles',
        'Terminator 1',
        'Terminator 2',
        'Terminator 3',
        'Terminator 4'
    ];

    for(var cont = 0; cont <10; cont++){
        $('.movie_list').append("<div class='split_container'><img src='./src/img/allMovies/"+ movieImg[cont] +".jpg'><a href='#'>"+ movieTitle[cont] + "</a></div>");
    }
}