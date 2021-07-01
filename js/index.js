
// if ( document.querySelector(".active").id==="s2") {
//   document.querySelector("nav").classList.add("bg-dark");
  
// } else {
//   document.querySelector("nav").classList.remove("bg-dark");
// }

// // Select the node that will be observed for mutations
// const targetNode = document.getElementById('s2');

// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: false, subtree: false };

// // Callback function to execute when mutations are observed
// const callback = function(mutationsList, observer) {
//     // Use traditional 'for loops' for IE 11
//     console.log("sd");
//     for(const mutation of mutationsList) {
//         if(mutation.attributeName==="active"){
//           console.log("hi");
//         }
//     }
// };
// // console.log("sd");
// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);

// // Later, you can stop observing
// observer.disconnect();



var $div = $("#s2");
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === "class") {
      var attributeValue = $(mutation.target).prop(mutation.attributeName);
      console.log("Class attribute changed to:", attributeValue);
      console.log(attributeValue.substring(attributeValue.length-6,attributeValue.length));
      if(attributeValue.substring(attributeValue.length-6,attributeValue.length)==="active"){
        document.querySelector("nav").classList.add("navbar-custom2");
      }
      else{
        document.querySelector("nav").classList.remove("navbar-custom2");
      }
    }
  });
});
observer.observe($div[0], {
  attributes: true
});

// $div.addClass('red');