$('.home_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
});
$('.library_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-left" aria-hidden="true"></i></i></button>',
  responsive: [
  {
    breakpoint: 1126,
    settings: {
      slidesToShow: 2
    }
  },
  {
    breakpoint:540,
    settings:{
      slidesToShow: 1
    }
  }
  ]
});
$('.online_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});
$('.img_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

$( document ).ready(function() {
  var html=$('html');
  var body=$('body');
  var m_nav=$('.menu-mb');
  var m_nav_btn=$('.menu-btn .btn-bar');
  var nav=m_nav.children('ul');
  m_nav.find("ul li").each(function(){
    if($(this).find("ul li").length > 0){
      $(this).prepend('<i></i>');
    }
  });
  m_nav_btn.click(function(e){
   e.stopPropagation();
   if(m_nav.is(':hidden')){
    $(this).addClass('active');
    m_nav.slideDown(200);
  }
  else{
    m_nav.slideUp(200);
    $(this).removeClass('active');
    m_nav.slideUp();
    m_nav.find('li ul').slideUp();
    m_nav.find('li>i').removeClass('active');
  }
});
  m_nav.find("li i").click(function(e){
   e.stopPropagation();
   var ul=$(this).nextAll("ul");
   if(ul.is(':hidden')===true){
    $(this).addClass('active');
    ul.slideDown(200);
  }
  else{
    ul.slideUp(200);
    $(this).removeClass('active');
  }
});
  win.click(function(e){
    m_nav.slideUp();
    m_nav.find('li ul').slideUp();
    m_nav.find('li>i').removeClass('active');
  });
}); 

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $('#main-nav').addClass('fixed-nav');
  }
  else{
    $('#main-nav').removeClass('fixed-nav');
  }
});


var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);