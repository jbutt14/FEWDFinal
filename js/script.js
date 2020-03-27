console.log("JS Loaded!");

//------------------------------------------------------
//----------------------VARIABLES-----------------------
//------------------------------------------------------

//PAGE AND SECTION RELATED VARIABLES
const sectionRandomTip = document.querySelector("#section-random-tip");

//ESTABLISHING VARIABLES FOR MENU BUTTONS
const menuButtonHome = document.querySelector("#menu-button-home");
const menuButtonRandom = document.querySelector("#menu-button-random");
const menuButtonHomeLayout = document.querySelector("#menu-button-home-layout");
const menuButtonSnapshot = document.querySelector("#menu-button-snapshot");
const menuButtonTimeline = document.querySelector("#menu-button-timeline");
const menuButtonDetails = document.querySelector("#menu-button-details");
const menuButtonAdmin = document.querySelector("#menu-button-admin");

//ESTABLISHING VARIABLES FOR INTRO SECTION BUTTONS
const introButtonTopic = document.querySelector("#intro-button-topic");
const introButtonRandom = document.querySelector("#intro-button-random");

//ESTABLISHING VARIABLES FOR RANDOM TIP SELECTION
const buttonTipRandom = document.querySelector("#random-tip");
const randomTipHeading = document.querySelector("#random-tip-heading");
const randomTipText = document.querySelector("#random-tip-text");
const randomTipImage = document.querySelector("#random-tip-image");

//------------------------------------------------------
//----------------------FUNCITONS-----------------------
//------------------------------------------------------

//MENU BUTTON FUNCTIONS
menuButtonHome.addEventListener("click", function() {
  console.log("home menu button clicked");
  // sectionRandomTip.scrollIntoView(true)
});

menuButtonRandom.addEventListener("click", function() {
  console.log("random menu button clicked");
  sectionRandomTip.scrollIntoView();
});

menuButtonHomeLayout.addEventListener("click", function() {
  console.log("home layout menu button clicked");
  // sectionRandomTip.scrollIntoView(true)
});

menuButtonSnapshot.addEventListener("click", function() {
  console.log("menu button snapshot clicked");
});

menuButtonTimeline.addEventListener("click", function() {
  console.log("menu button timeline clicked");
});

menuButtonDetails.addEventListener("click", function() {
  console.log("menu button details clicked");
});

menuButtonAdmin.addEventListener("click", function() {
  console.log("menu button admin clicked");
});

//THIS SECTION IS FOR THE INTRO BUTTON ACTIONS
introButtonTopic.addEventListener("click", function() {
  console.log("intro button topic");
});

introButtonRandom.addEventListener("click", function() {
  console.log("intro button random");
});

//DATA VARIABLES FOR RANDOM TIP HEADING, TEXT, AND IMAGE
const randomTipHeadingData = [
  "HOME LAYOUT",
  "STUDIES SNAPSHOT LAYOUT",
  "STUDIES TIMELINE LAYOUT",
  "STUDIES DETAIL LAYOUT",
  "ADMINISTRATION LAYOUT"
];
const randomTipTextData = [
  "Use this layout to view your dashboard, charge time again projects, generate reports, and more.",
  "This tab contains only the most important information relating to this study (think of it as your Study Dashboard).",
  "This tab shows the complete timeline of upcoming events for the selected study.",
  "This tab allows for entry of broad-purpose study details, such as assigned personnel and other study-specific information.",
  "Use this layout to add task types, administer user accounts, and define other items."
];
const randomTipImageData = [
  "../images/home-layout.png",
  "../images/studies_snapshot.png",
  "../images/studies_timeline.png",
  "../images/studies_details.png",
  "../images/admin.png"
];

console.log(buttonTipRandom);
console.log(randomTipHeading);
console.log(randomTipText);

//FUNCTION TO FOLLOW WHEN RANDOM TIP BUTTON IS CLICKED. DETERMINES RANDOM NUMBER BETWEEN 0-4 (SINCE THERE ARE 5 POSSIBLE VALUES), THEN POPULATES HEADING, TEXT, AND IMAGE WITH ASSOCIATED NUMBER FROM DATA VARIABLES.
buttonTipRandom.addEventListener("click", function() {
  let randomNumber = Math.floor(Math.random() * 5);
  console.log(randomNumber);
  console.log(randomTipImageData[randomNumber]);

  randomTipHeading.innerText = randomTipHeadingData[randomNumber];
  randomTipText.innerText = randomTipTextData[randomNumber];
  randomTipImage.src = randomTipImageData[randomNumber];
});
