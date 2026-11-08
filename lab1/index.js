const bt = document.getEelementById("bt");
const parent = document.getElementById("parent");

bt.addEventListener("click", (e) => {
  const newChild = document.createElement("div");

  let counter = 0;

  newChild.innerHTML = counter;
  newChild.classList = "klasa2";

  newChild.addEventListener("click", (ev) => {
    counter += 1;
    newChild.innerHTML = counter;
  });

  parent.appendChild(newChild);
});
