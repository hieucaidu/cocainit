var to = nameGirl; // Assuming nameGirl is defined elsewhere
var gift_url ='<img src="https://png.pngtree.com/png-clipart/20230217/original/pngtree-open-red-gift-box-present-with-flying-hearts-for-valentine-day-png-image_8957274.png"></img>';
var gift_image_url = 'con-cai-nit.png'; // Update this to the new image URL

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName); // Assuming eventName is defined elsewhere
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`; // Assuming titleCard is defined elsewhere
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`; // Assuming contentCard is defined elsewhere
  document.querySelector('#card .honey').setAttribute('src', `${gift_image_url}`); // Use the new image URL

  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();
