let num = null;
const rating = document.querySelectorAll(".button_rate");
[...rating].map((item) => {
  item.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    item.classList.add("active");
    num = item.innerText;
  });
});

const submit = document.querySelector(".submit_button");
submit.addEventListener("click", () => {
  if (num === null) {
    alert("You Must Choose A Rate");
  } else {
    document.querySelector(".text2").innerText = `You selected ${num} out of 5`;
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container2").style.display = "grid";
  }
});
