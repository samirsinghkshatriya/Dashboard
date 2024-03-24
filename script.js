let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
let subTask = document.querySelector(".sub-phase");
let noTask = document.querySelector(".no-phase");
let B2C = document.querySelector(".visibility");
let B2C_info = document.querySelector(".B2C-info");
let B2C_info2 = document.querySelector(".B2C-info2");
let B2C_info3 = document.querySelector(".B2C-info3");
let B2C_info4 = document.querySelector(".B2C-info4");
let research = document.querySelector(".First");
let planning = document.querySelector(".planning");
let desiging = document.querySelector(".desiging");
let manufacturing = document.querySelector(".manufacturing");
let sales = document.querySelector(".sales");
let Research = document.querySelector(".Research");
let Planning = document.querySelector(".Planning");
let Desiging = document.querySelector(".Desiging");
let Manufacturing = document.querySelector(".Manufacturing");
let Sales = document.querySelector(".Sales");

sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


subTask.onclick = function(){
  noTask.classList.toggle("visibility");
  B2C.classList.toggle("visibility");
  B2C_info.classList.add("visibility1");
  B2C_info2.classList.add("visibility1");
  B2C_info3.classList.add("visibility1");
  B2C_info4.classList.add("visibility1");
}

B2C.onclick = function(){
  B2C_info.classList.toggle("visibility1");
  B2C_info2.classList.toggle("visibility1");
  B2C_info3.classList.toggle("visibility1");
  B2C_info4.classList.toggle("visibility1");
}

// Research.onclick = function(){
//   planning.classList.add("planning");
//   research.classList.remove("research");
//   desiging.classList.add("desiging");
//   manufacturing.classList.add("manufacturing");
//   sales.classList.add("sales");
// }

Planning.onclick = function(){
  planning.classList.remove("planning");
  research.classList.add("research");
  desiging.classList.add("desiging");
  manufacturing.classList.add("manufacturing");
  sales.classList.add("sales");
}

Desiging.onclick = function(){
  planning.classList.add("planning");
  research.classList.add("research");
  desiging.classList.remove("desiging");
  manufacturing.classList.add("manufacturing");
  sales.classList.add("sales");
}

Manufacturing.onclick = function(){
  planning.classList.add("planning");
  research.classList.add("research");
  desiging.classList.add("desiging");
  manufacturing.classList.remove("manufacturing");
  sales.classList.add("sales");
}

Sales.onclick = function(){
  planning.classList.add("planning");
  research.classList.add("research");
  desiging.classList.add("desiging");
  manufacturing.classList.add("manufacturing");
  sales.classList.remove("sales");
}