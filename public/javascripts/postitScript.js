document.addEventListener("DOMContentLoaded", () => {
  let tallPostIt = document.querySelectorAll("img");
  let squarePostIt = document.querySelectorAll("img");
  let widePostIt = document.querySelectorAll("img");
  //let randomPostitImage = "PostItTall" + randomNumber(112) + ".png";

  function randomNumber(nmb) {
    let number = Math.floor(Math.random() * nmb) + 1;
    return number;
  }

  for (let tallPost of tallPostIt) {
    tallPost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItTall" + randomNumber(112) + ".png";
      document
        .querySelectorAll("img")[0]
        .setAttribute("src", randomPostitImage);
    });
  }

  for (let squarePost of squarePostIt) {
    squarePost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItSquare" + randomNumber(49) + ".png";
      document
        .querySelectorAll("img")[1]
        .setAttribute("src", randomPostitImage);
    });
  }
  for (let squarePost of squarePostIt) {
    squarePost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItSquare" + randomNumber(49) + ".png";
      document
        .querySelectorAll("img")[2]
        .setAttribute("src", randomPostitImage);
    });
  }

  for (let tallPost of tallPostIt) {
    tallPost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItTall" + randomNumber(112) + ".png";
      document
        .querySelectorAll("img")[3]
        .setAttribute("src", randomPostitImage);
    });
  }
  for (let widePost of widePostIt) {
    widePost.addEventListener("click", () => {
      let randomPostitImage = "./images/PostItWide" + randomNumber(86) + ".png";
      document
        .querySelectorAll("img")[4]
        .setAttribute("src", randomPostitImage);
    });
  }
  for (let tallPost of tallPostIt) {
    tallPost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItTall" + randomNumber(112) + ".png";
      document
        .querySelectorAll("img")[5]
        .setAttribute("src", randomPostitImage);
      tallPost.addEventListener("dblclick", removeClassTall3);
    });
  }
  for (let widePost of widePostIt) {
    widePost.addEventListener("click", () => {
      let randomPostitImage = "./images/PostItWide" + randomNumber(86) + ".png";
      document
        .querySelectorAll("img")[6]
        .setAttribute("src", randomPostitImage);
    });
  }
  for (let tallPost of tallPostIt) {
    tallPost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItTall" + randomNumber(112) + ".png";
      document
        .querySelectorAll("img")[7]
        .setAttribute("src", randomPostitImage);
    });
  }

  for (let widePost of widePostIt) {
    widePost.addEventListener("click", () => {
      let randomPostitImage = "./images/PostItWide" + randomNumber(86) + ".png";
      document
        .querySelectorAll("img")[8]
        .setAttribute("src", randomPostitImage);
    });
  }
  for (let squarePost of squarePostIt) {
    squarePost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItSquare" + randomNumber(49) + ".png";
      document
        .querySelectorAll("img")[9]
        .setAttribute("src", randomPostitImage);
    });
  }
  for (let tallPost of tallPostIt) {
    tallPost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItTall" + randomNumber(112) + ".png";
      document
        .querySelectorAll("img")[10]
        .setAttribute("src", randomPostitImage);
    });
  }

  for (let squarePost of squarePostIt) {
    squarePost.addEventListener("click", () => {
      let randomPostitImage =
        "./images/PostItSquare" + randomNumber(49) + ".png";
      document
        .querySelectorAll("img")[11]
        .setAttribute("src", randomPostitImage);
    });
  }

  //Tall post it
  // let randomPostitImage = "PostItTall" + randomNumber(112) + ".png";
  // document.querySelectorAll("img")[0].setAttribute("src", randomPostitImage);
  // //Square post it
  // let randomPostitImage2 = "PostItSquare" + randomNumber(49) + ".png";
  // document.querySelectorAll("img")[1].setAttribute("src", randomPostitImage2);
  // //Square post it
  // let randomPostitImage3 = "PostItSquare" + randomNumber(49) + ".png";
  // document.querySelectorAll("img")[2].setAttribute("src", randomPostitImage3);
  // //Tall post it
  // let randomPostitImage4 = "PostItTall" + randomNumber(112) + ".png";
  // document.querySelectorAll("img")[3].setAttribute("src", randomPostitImage4);
  // //Wide post it
  // let randomPostitImage5 = "PostItWide" + randomNumber(86) + ".png";
  // document.querySelectorAll("img")[4].setAttribute("src", randomPostitImage5);
  // //Tall post it
  // let randomPostitImage6 = "PostItTall" + randomNumber(112) + ".png";
  // document.querySelectorAll("img")[5].setAttribute("src", randomPostitImage6);
  // //Wide post it
  // let randomPostitImage7 = "PostItWide" + randomNumber(86) + ".png";
  // document.querySelectorAll("img")[6].setAttribute("src", randomPostitImage7);

  // //Second set of images

  // //Tall post it
  // let randomPostitImage8 = "PostItTall" + randomNumber(112) + ".png";
  // document.querySelectorAll("img")[7].setAttribute("src", randomPostitImage8);
  // //Wide post it
  // let randomPostitImage9 = "PostItWide" + randomNumber(86) + ".png";
  // document.querySelectorAll("img")[8].setAttribute("src", randomPostitImage9);
  // //Square post it
  // let randomPostitImage10 = "PostItSquare" + randomNumber(49) + ".png";
  // document.querySelectorAll("img")[9].setAttribute("src", randomPostitImage10);
  // //Tall post it
  // let randomPostitImage11 = "PostItTall" + randomNumber(112) + ".png";
  // document.querySelectorAll("img")[10].setAttribute("src", randomPostitImage11);
  // //Square post it
  // let randomPostitImage12 = "PostItSquare" + randomNumber(49) + ".png";
  // document.querySelectorAll("img")[11].setAttribute("src", randomPostitImage12);

  //RefreshButton
  const refreshButton = document.querySelector("#button");

  const refreshPage = () => {
    location.reload();
  };

  refreshButton.addEventListener("click", refreshPage);

  const taller = document.querySelector("#tall");
  const taller2 = document.querySelector("#tall2");
  const taller3 = document.querySelector("#tall3");
  const taller4 = document.querySelector("#tall4");
  const taller5 = document.querySelector("#tall5");
  const taller6 = document.querySelector("#tall6");
  const taller7 = document.querySelector("#tall7");
  const taller8 = document.querySelector("#tall8");
  const taller9 = document.querySelector("#tall9");
  const wider = document.querySelector("#wide");
  const wider2 = document.querySelector("#wide2");
  const wider3 = document.querySelector("#wide3");
  const makeBigger = document.querySelector("#buttonSize");

  // makeBigger.addEventListener("click", () => {
  //   removeClass();
  // });

  function removeClassTall() {
    if (taller.classList.contains("postItPicturesTall")) {
      taller.classList.remove("postItPicturesTall");
      taller.classList.add("postItPicturesTaller");
    } else if (taller.classList.contains("postItPicturesTaller")) {
      taller.classList.remove("postItPicturesTaller");
      taller.classList.add("postItPicturesTall");
    }
  }

  function removeClassTall2() {
    if (taller2.classList.contains("postItPicturesTall")) {
      taller2.classList.remove("postItPicturesTall");
      taller2.classList.add("postItPicturesTaller");
    } else if (taller2.classList.contains("postItPicturesTaller")) {
      taller2.classList.remove("postItPicturesTaller");
      taller2.classList.add("postItPicturesTall");
    }
  }
  function removeClassTall3() {
    if (taller3.classList.contains("postItPicturesTall")) {
      taller3.classList.remove("postItPicturesTall");
      taller3.classList.add("postItPicturesTaller");
    } else if (taller3.classList.contains("postItPicturesTaller")) {
      taller3.classList.remove("postItPicturesTaller");
      taller3.classList.add("postItPicturesTall");
    }
  }
  function removeClassTall4() {
    if (taller4.classList.contains("postItPicturesTall")) {
      taller4.classList.remove("postItPicturesTall");
      taller4.classList.add("postItPicturesTaller");
    } else if (taller4.classList.contains("postItPicturesTaller")) {
      taller4.classList.remove("postItPicturesTaller");
      taller4.classList.add("postItPicturesTall");
    }
  }

  function removeClassTall5() {
    if (taller5.classList.contains("postItPicturesTall")) {
      taller5.classList.remove("postItPicturesTall");
      taller5.classList.add("postItPicturesTaller");
    } else if (taller5.classList.contains("postItPicturesTaller")) {
      taller5.classList.remove("postItPicturesTaller");
      taller5.classList.add("postItPicturesTall");
    }
  }
  function removeClassTall6() {
    if (taller6.classList.contains("postItPicturesTall")) {
      taller6.classList.remove("postItPicturesTall");
      taller6.classList.add("postItPicturesTaller");
    } else if (taller6.classList.contains("postItPicturesTaller")) {
      taller6.classList.remove("postItPicturesTaller");
      taller6.classList.add("postItPicturesTall");
    }
  }
  function removeClassTall7() {
    if (taller7.classList.contains("postItPicturesTall")) {
      taller7.classList.remove("postItPicturesTall");
      taller7.classList.add("postItPicturesTaller");
    } else if (taller7.classList.contains("postItPicturesTaller")) {
      taller7.classList.remove("postItPicturesTaller");
      taller7.classList.add("postItPicturesTall");
    }
  }
  function removeClassTall8() {
    if (taller8.classList.contains("postItPicturesTall")) {
      taller8.classList.remove("postItPicturesTall");
      taller8.classList.add("postItPicturesTaller");
    } else if (taller8.classList.contains("postItPicturesTaller")) {
      taller8.classList.remove("postItPicturesTaller");
      taller8.classList.add("postItPicturesTall");
    }
  }
  function removeClassTall9() {
    if (taller9.classList.contains("postItPicturesTall")) {
      taller9.classList.remove("postItPicturesTall");
      taller9.classList.add("postItPicturesTaller");
    } else if (taller9.classList.contains("postItPicturesTaller")) {
      taller9.classList.remove("postItPicturesTaller");
      taller9.classList.add("postItPicturesTall");
    }
  }
  function removeClassWide() {
    if (wider.classList.contains("postItPicturesWide")) {
      wider.classList.remove("postItPicturesWide");
      wider.classList.add("postItPicturesWider");
    } else if (wider.classList.contains("postItPicturesWider")) {
      wider.classList.remove("postItPicturesWider");
      wider.classList.add("postItPicturesWide");
    }
  }
  function removeClassWide2() {
    if (wider2.classList.contains("postItPicturesWide")) {
      wider2.classList.remove("postItPicturesWide");
      wider2.classList.add("postItPicturesWider");
    } else if (wider2.classList.contains("postItPicturesWider")) {
      wider2.classList.remove("postItPicturesWider");
      wider2.classList.add("postItPicturesWide");
    }
  }
  function removeClassWide3() {
    if (wider3.classList.contains("postItPicturesWide")) {
      wider3.classList.remove("postItPicturesWide");
      wider3.classList.add("postItPicturesWider");
    } else if (wider3.classList.contains("postItPicturesWider")) {
      wider3.classList.remove("postItPicturesWider");
      wider3.classList.add("postItPicturesWide");
    }
  }

  // function changeButton() {
  //   if (makeBigger.classList.contains("buttonChange")) {
  //     makeBigger.classList.remove("buttonChange");
  //     makeBigger.classList.add("buttonAfter");
  //   } else if (makeBigger.classList.contains("buttonAfter")) {
  //     makeBigger.classList.remove("buttonAfter");
  //     makeBigger.classList.add("buttonChange");
  //   }
  // }

  // var sizeButton = document.getElementById("button");

  // function change() {
  //   // no ';' here
  //   if (sizeButton.value == "art bigger") sizeButton.value = "art smaller";
  //   else sizeButton.value = "art bigger";
  // }

  var btn = document.getElementById("buttonSize");

  function change() {
    if (btn.innerText == "make smaller") {
      btn.innerText = "make larger";
    } else {
      btn.innerText = "make smaller";
    }
  }
});
