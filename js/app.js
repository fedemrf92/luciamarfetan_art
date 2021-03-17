$(".flotante").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

$("h2").click(function () {
  $("#descripcion").toggle(1000);
});
