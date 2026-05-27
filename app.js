
function scrollLeftCustom(){
  document.getElementById('movieRow')
    .scrollBy({
      left:-320,
      behavior:'smooth'
    });
}

function scrollRightCustom(){
  document.getElementById('movieRow')
    .scrollBy({
      left:320,
      behavior:'smooth'
    });
}
