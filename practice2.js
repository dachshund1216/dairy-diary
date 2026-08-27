// instagram-clone-js/js/practice2.js
const sections = document.querySelectorAll("section");
const postList = sections[1];

console.log("화면 전체 li", document.querySelectorAll("li").length);
console.log("게시물 목록 안 li", postList.querySelectorAll("li").length);
console.log("없는 것 하나", document.querySelector(".post-grid"));
console.log("없는 것 전부", document.querySelectorAll(".post-grid").length);