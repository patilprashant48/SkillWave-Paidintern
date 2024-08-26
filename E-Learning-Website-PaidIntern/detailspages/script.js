document.querySelector(".enroll-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("form-container").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("form-container").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});
