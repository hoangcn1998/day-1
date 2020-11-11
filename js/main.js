document.addEventListener("DOMContentLoaded", function () {
  function createCircel() {
    var getMartian = document.getElementById("martian");

    for (var i = 1; i <= 8; i++) {
      var circel = document.createElement("div");
      circel.classList.add("circel");
      getMartian.appendChild(circel);

      var offseets = document.getElementById("martian").getBoundingClientRect();
      var top = offseets.top;
      var left = offseets.left;
      console.log(top, left);

      var height = getMartian.offsetHeight;
      var width = getMartian.offsetWidth;
      var randomHeight = Math.floor(Math.random() * height);
      var randomWidth = Math.floor(Math.random() * width);
      // console.log(randomHeight, randomWidth);
      circel.style.marginTop = randomHeight + "px";
      circel.style.marginRight = randomWidth + "px";
      circel.style.width = Math.floor(Math.random() * 10) + 1 + "px";
      circel.style.height = circel.style.width;
    }
  }

  createCircel();
});
