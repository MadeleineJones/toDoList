var cardContainer=$('.card-container');
var submit=$('.submit-btn');
submit.on("click",createNewItem);
function createNewItem(){
  var item=$('.time').val();
  appendNewItem(item);
}
function appendNewItem(item){
  cardContainer.append(`<div class="box">
    <p>${item}</p>
    <div id="name">
      <input class="name" type="text">
      <input class="sub" type="submit">
    </div>
    </div>`);
  $('.time').val("");
  var name=$('#name');
  sub.on("click",remove);
  $('.name').val("");
  //var checkbox=$('.checkbox');
  //checkbox.on("click",remove);
}
function remove(){
  event.target.parentNode.remove();
}

// function remove(){
//   event.target.parentNode.remove();
// }
