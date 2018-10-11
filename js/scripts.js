//LIST ITEMS
const li = document.querySelectorAll("li");
//ANCHORS

// ALL ANCHORS
const anchors = document.querySelectorAll('a');

let val;
let text;


// INPUT 

document.querySelector(".input").addEventListener("keyup", function(e){
  let targetInput = e.target.value.toLowerCase();
  filter(targetInput);
});

function filter(input) {
  for(let i = 0; i < anchors.length; i++){
    val = anchors[i].getAttribute("data-title").toLowerCase();
    for(let y = 0; y <val.length; y++) {
        if(val.indexOf(input) > -1){
          text = true;
        }
    }
    if(text){
      anchors[i].style.display = "";
      text = false;
    }else{
      anchors[i].style.display = "none";
    }
  }
}




