let value;

console.log(document.location);

// value = document.location.pathname;
// value =document.title;
value=document.links.item(4).getAttribute("class");
value=document.links.item(4).classList[3];
console.log(value);