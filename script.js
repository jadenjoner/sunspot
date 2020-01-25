console.log("script.js initalized");


if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    alert("You've tried to open context menu");
    window.event.returnValue = false;
  });
}

document.querySelectorAll('*').forEach(function(node) {
    ondragstart = function() { return false; };
});



function popup(){
  popup_div = document.getElementById('popup')
  popup_bg = document.getElementById('popup-bg')
  popup_close = document.getElementById('close-popup')
  
  popup_div.style.opacity = "1";
  popup_div.style.zIndex = "11";
  
  popup_bg.style.display="block";
  popup_close.style.display="block";

  window.location.assign("http://gaint.ga");
  document.getElementById('body').style.overflow = "hidden";
}


function closePopup(){
  popup_div = document.getElementById('popup')
  popup_bg = document.getElementById('popup-bg')
  popup_close = document.getElementById('close-popup')
  
  popup_div.style.opacity = "0";
  popup_div.style.zIndex = "-100";
  
  popup_bg.style.display="none";
  popup_close.style.display="none";

  window.location.assign("#wave3");
  window.location.reload(false); 
  document.getElementById('body').style.overflow = "auto";
}
