
var slideRight = function(){
  $(".main-section-background-image-container").css("left", "-100vw");
  $(".main-section-background-image-right-container").css("left", "0vw");

  $(".main-section-background-image-left-container").remove();
  $(".main-section-background-image-container").addClass("main-section-background-image-left-container").removeClass("main-section-background-image-container");
  $(".main-section-background-image-right-container").addClass("main-section-background-image-container").removeClass("main-section-background-image-right-container");

  currentImageIdx = (currentImageIdx + 1) % 7;
  var newRightImageIdx = (currentImageIdx + 1) % 7;

  var newRightContainer = $(`
    <div class="main-section-background-image-right-container">
      <image class="main-section-background-image" src="./images/00${newRightImageIdx}.jpg"/>
    </div>
  `);
  $(".background-image-container-reference").append(newRightContainer);
}
var slideLeft = function(){
  $(".main-section-background-image-container").css("left", "100vw");
  $(".main-section-background-image-left-container").css("left", "0vw");

  $(".main-section-background-image-right-container").remove();
  $(".main-section-background-image-container").addClass("main-section-background-image-right-container").removeClass("main-section-background-image-container");
  $(".main-section-background-image-left-container").addClass("main-section-background-image-container").removeClass("main-section-background-image-left-container");

  currentImageIdx = (currentImageIdx + 7 - 1) % 7;
  var newLeftImageIdx = (currentImageIdx + 7 - 1) % 7;

  var newLeftContainer = $(`
    <div class="main-section-background-image-left-container">
      <image class="main-section-background-image" src="./images/00${newLeftImageIdx}.jpg"/>
    </div>
  `);
  $(".background-image-container-reference").prepend(newLeftContainer);
}
