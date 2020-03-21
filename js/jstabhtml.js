function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


// mở tab toggle và hiện dấu trừ ẩn dấu cộng
  function myFunction() {
    var element = document.getElementById("nhanvaoday");
    element.classList.toggle("opentab");

    var cong = document.getElementById("daucong");
    cong.classList.toggle("closetab");
    var tru = document.getElementById("dautru");
    tru.classList.toggle("opentab");

}
// mở tab toggle và hiện dấu trừ ẩn dấu cộng

// cộng trừ số lượng 
var number =document.getElementById("input_value");
number.value=1;
$('#plus').click(function(){
  if (number.value<16) {
      number.value++;
  }
   
})
$('#minus').click(function(){
  if (number.value>1) {
    number.value--;
  }
})
// cộng trừ số lượng

// ẩn hiện dấu tích
function funtionclick() {
  
  var an = document.getElementById("an");
  an.classList.toggle("closetab");
  var hien = document.getElementById("hien");
  hien.classList.toggle("opentab");

}
// ẩn hiện dấu tích


