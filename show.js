function zvuk() {

    document.getElementById('sound').play();

}
function YN(){
    document.getElementById('1').play();
    var audio = document.getElementById('1');
    audio.volume=0.05;
}
function YNS(){
    document.getElementById('1').load();
}


function DS(){
    document.getElementById('2').play();
    var audio = document.getElementById('2');
    audio.volume=0.05;
}
function DSS(){
    document.getElementById('2').load();
}


function JK(){
    document.getElementById('3').play();
    var audio = document.getElementById('3');
    audio.volume=0.05;
}
function JKS(){
    document.getElementById('3').load();
}

$(".className").mouseover(function(){
    $(this).css("color", "gray");
});
$(".className").mouseout(function(){
    $(this).css("color", "white");
});
$("body").on("mouseover", "video", function(){
    this.play();
    $( this ).css( "background-color", "black" );
  });
  $("body").on("mouseleave", "video", function(){
    this.load();
  })