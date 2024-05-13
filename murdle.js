// get all clickable boxes
document.querySelectorAll(".clickable").forEach((item) => {
  // for each box, record how many times it has been clicked
  item.dataset.clickIndex = 0;
  // these are the classes we want to add on a click
  const classes = ["times", "check", "question", ""];
  // add a click event listener to each box
  item.addEventListener("click", (event) => {
    let target = event.target;
    // If the clicked element is not the item itself, find the closest parent item
    if (!target.classList.contains("clickable")) {
      target = target.closest(".clickable");
    }

    // remove the old class first
    target.classList.remove("times", "check", "question");
    // add the new class from the array unless it's the 4th click
    if (target.dataset.clickIndex < 3) {
      target.classList.add(classes[target.dataset.clickIndex]);
      // add the appropriate icon for the class that was added
      target.innerHTML = `<i class="fas fa-${classes[target.dataset.clickIndex]}"></i>`;
    } else {
      target.innerHTML = ``;
    }
    // increment the click index, and wrap back to 0 once we hit 4
    target.dataset.clickIndex = (parseInt(target.dataset.clickIndex) + 1) % 4;
  });
});
