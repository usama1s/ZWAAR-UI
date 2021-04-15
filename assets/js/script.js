
if ($(".scroll-items")[0]) {
  const slider = document.querySelector('.scroll-items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });
}







  $(".newsletter-form Button").click(function(){
    $(".plane-b").addClass("plane-b-animate");
    $(".plane-s").addClass("plane-s-animate");
    $(".newsletter-form Button").html("Subscribed");
    $(".newsletter-form Button").addClass("clicked");
  setTimeout(function(){
    // $(".newsletter-form form").submit();

    $(".plane-b").removeClass("plane-b-animate");
    $(".plane-s").removeClass("plane-s-animate");
    $(".newsletter-form Button").html("Subscribe");
    $(".newsletter-form Button").removeClass("clicked");
  }, 2000);

// alert("fdsafsa");
});





// typewriter animaiton
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  // this.period = parseInt(period, 10) || 2000;
  this.period = 500; // ending duration
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  // console.log(this.toRotate.length);

  var fullTxt = this.toRotate[i];
    // console.log(fullTxt.length);
// console.log(this.txt.length);
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    // delta /= 2;
    delta = 780/(fullTxt.length); // deleting character
  }else{
    delta = 1500/(fullTxt.length); //typing character
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    // delta = this.period;
    delta = 1150; // ending duration
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000; //starting duration
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 3px solid #fff }";
  // document.body.appendChild(css);
};







// var elmnt = document.querySelector("#scrolling-div .body");
// var myElement = document.querySelector('#scroll-here');
// var topPos = myElement.offsetTop;
// var x = elmnt.clientHeight;
// console.log(x );
// elmnt.scroll({
//   top: x-400,
//
//   behavior: 'smooth'
// });
if ($("#scroll-here")[0]){
    startPopUnderAnimation();
}

function startPopUnderAnimation(){

  var myElement = document.getElementById('scroll-here');
  var topPos = myElement.clientHeight;


  setTimeout(function(){

    $('#scrolling-div .page1').animate({
            scrollTop: topPos+350
        }, 600);

        setTimeout(function(){
          $('.cursor').addClass("move");
          setTimeout(function(){
            $('.cursor').addClass("click");
             $('.pop-under').addClass("tapped");
             $('#scrolling-div').addClass("clicked");
             setTimeout(function(){
               $('.pop-under').addClass("open-tab2");
               $('.cursor').addClass("hide");
               setTimeout(function(){
                 $('.pop-under').addClass("open-btn");
               }, 1000);
             }, 300);
          }, 600);
        }, 700);

  }, 1500);

  //
  // setTimeout(function(){
  //   $('#scrolling-div').addClass("clicked");
  // }, 3200);
  //
  // setTimeout(function(){
  //   $('.cursor').addClass("hide");
  // }, 4000);
  //
  // setTimeout(function(){
  //   $('.pop-under').addClass("open-tab2");
  // }, 4500);
  //
  // setTimeout(function(){
  //   $('.pop-under').addClass("open-btn");
  // }, 5000);

}


function restartPopUnderAnimation(){
  $('.cursor').removeClass("move");
  $('.cursor').removeClass("click");
  $('.pop-under').removeClass("tapped");
  $('.pop-under').removeClass("open-tab2");
  $('.cursor').removeClass("hide");
  $('.pop-under').removeClass("open-btn");

  $('#scrolling-div .page1').animate({
          scrollTop: 0
      }, 600);

      startPopUnderAnimation();
}

$("#reload-btn").click(function(){

  restartPopUnderAnimation();
});





// var i=1;
// $("h6.curved span").each(function(){
//   // alert("fdsaf");
//   // console.log("t");
//   $(this).css('transform','rotate('+ (i*1.5) + 'deg)');
//   i++;
// })
