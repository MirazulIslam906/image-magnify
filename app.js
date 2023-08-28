const img_box = document.querySelector(".image_box");
const main = document.querySelector("#img-01");
 const magnifid = document.querySelector("#img-02");

img_box.addEventListener("mousemove", targetSection);


function targetSection(e) {
  const dx = img_box.offsetLeft;
  const dy = img_box.offsetTop;
  const x = e.pageX - dx;
  const y = e.pageY - dy;
  console.log(x, dx);
  console.log(y, dy);
 let imgWidth = main.offsetWidth;
 let imgHeight = main.offsetHeight;
  let xperc = ((x / imgWidth) * 100);
  let yperc = ((y / imgHeight) * 100);
  magnifid.style.backgroundPositionX = (xperc - 4) + "%";
  magnifid.style.backgroundPositionY = (yperc - 2) + "%";
  magnifid.style.left = (x+100) + "px";
  magnifid.style.top = (y - 100) + "px";
}

