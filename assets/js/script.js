// function carouselSet(){
  var carouselListItem = document.querySelectorAll(".carousel-list .list .carousel-item-m");
  var l = (carouselListItem.length);
  var w = carouselListItem[0].offsetWidth ;
  let style = getComputedStyle(carouselListItem[0]);

  var p = parseInt(style.marginLeft) + parseInt(style.marginRight);
  console.log("width: " + w + "padding: " + p);

  var ww = [(l*w) + (l*p*1.22) + "px"];

  document.querySelector(".carousel-list .list").style.width = ww;
  // document.querySelector(".carousel-list .list").style.background = "red";
// }


// alert("fdsf");
