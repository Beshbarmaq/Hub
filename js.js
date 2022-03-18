document.getElementById('1').style.display = 'none';


$(".className").mouseover(function(){
    $(this).css("color", "coral");
});
$(".className").mouseout(function(){
    $(this).css("color", "black");
});

$(".classDan").mouseover(function(){
    $(this).css("color", "coral");
});
$(".classDan").mouseout(function(){
    $(this).css("color", "white");
});

function tanec() {
    
    document.getElementById('sound').play();
    
}
function netanec(){
    document.getElementById('sound').load();
}


function chpok(){
    var elem = document.getElementById('1'); //находим блок div по его id, который передали в функцию
    var state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') {
        elem.style.display='none';
        elem.load();
    } //если включен, то выключаем
    else {
        elem.style.display=''; 
        elem.play();
    }//иначе - включаем
}


$("body").on("click", "video", function(){
    this.play();
    $( this ).css( "background-color", "black" );
  });
  $("body").on("click", "video", function(){
    this.load();
  })