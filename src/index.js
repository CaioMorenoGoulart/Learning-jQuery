$( ".botaoCortesia" ).click(function() {
  console.log("Amigo estou aqui")
});
$( ".mudaTexto p" ).click(function() {
  $(this).text("Meu texto")
});
$( ".troca" ).click(function() {
  $(".boxOffBoxes2 .box2").insertAfter('.boxOffBoxes2 .box3');
});
$( ".valor" ).click(function() {
  var $input = (".input1")
  $(".inputloc").html("<p>"+$input.attr);
});
