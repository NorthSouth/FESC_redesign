/*document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);*/

function mouseOver() {
    /*document.getElementById("demo").style.color = "red";*/
  console.log("eek! a mouse", this);
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}

/*var idLinkList = document.querySelectorAll('*[id]');*/
var ids = document.querySelectorAll('[id]');

/*
Array.prototype.forEach.call( ids, function( el, i ) {
    // "el" is your element
    console.log( el.id ); // log the ID
});*/

var arr = Array.prototype.map.call( ids, function( el, i ) {
    return el.id;
});

arr.forEach(function(element) {
  idTest=element.includes("link-container-");
  if (idTest) {
    console.log("Found one! ",element);
    document.getElementById(element).addEventListener("mouseover", mouseOver);
  }
});
