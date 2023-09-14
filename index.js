const body = document.body;
body.style.padding = "25px"
/*    FOR HEADER CREATION*/
const header = document.createElement("header");
const logoConatiner = document.createElement("div")
const logoH4 = document.createElement("h4")
const logoP =document.createElement("p")
const nav = document.createElement("nav");
const containerButton = document.createElement("div")
const signupButton = document.createElement("button");
const signinButton = document.createElement("button")
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
/** ***************************************************************************/



/**TEXTCONTENT FOR HEADER*********************************************************************** */
li1.textContent = "Collection"
li2.textContent = "Community"
li3.textContent = "Create"
li4.textContent = "About"
signinButton.textContent ="Sign IN"
signupButton.textContent = "Sign UP" 
logoH4.textContent = "NFT"
logoP.textContent = ".market"
/*********************************** */


/***********************************APPEND FOR HEADER*/
body.appendChild(header)
header.appendChild(logoConatiner)
logoConatiner.appendChild(logoH4)
logoConatiner.appendChild(logoP)
header.appendChild(nav)
nav.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
header.appendChild(containerButton)
containerButton.appendChild(signinButton)
containerButton.appendChild(signupButton)

/**************************FOR STYLING************************** */
body.style.backgroundColor = "black"
header.style.display = "flex"
header.style.padding = "25px"
header.style.justifyContent = "space-between"
header.style.alignItems = "center"
logoConatiner.style.display ="flex" 
logoH4.style.color = "white"
logoP.style.color = "white"
ul.style.display = "flex"
ul.style.gap = "40px"
ul.style.listStyle = "none"
ul.style.color= "white"
containerButton.style.display = "flex"
containerButton.style.gap = "25px"

function buttonStyle(button, color) {
    button.style.height = "45px"
    button.style.width = "120px"
    button.style.borderRadius = "120px"
    button.style.backgroundColor = "darkred"
    button.style.color = color
    button.style.fontWeight = "bold"


    button.addEventListener('mousedown', () => {
      button.style.transform = 'scale(0.8)';
    })

    button.addEventListener('mouseup', () => {
      button.style.transform = '';
    })


}

buttonStyle(signinButton, "#BFC200")
buttonStyle(signupButton, "white")





/*FOR MAIN*************************************************************************/
const main = document.createElement("main")
const leftmain = document.createElement("div")
const mainh2One = document.createElement("h2")
const mainh2Two = document.createElement("h2")
const mainh3 = document.createElement("h3")
const mainP = document.createElement("p")
const mainh4 = document.createElement("h4")
const numDiv = document.createElement("div")
const mainh4one = document.createElement("h4")
const span = document.createElement("span")
const mainButton = document.createElement("button")
const arrow = document.createElement("img")
const num18 = document.createElement("p")
const rightmain = document.createElement("div")
const picture = document.createElement("img")

buttonStyle(mainButton, "BFC200")


/*** CREATING CONTENT FOR MAIN */
mainh2One.textContent = "Be one of the first 3 people to buy this"
mainh2Two.textContent = "NFT"
mainP.textContent = "and get 10$ bonus along with the purchase"
mainh4.textContent = "the price of "
mainh4one.textContent = "this NFT:"
arrow.src = "Arrow 1.svg" 
mainButton.textContent = "Buy me"
num18.textContent = "18 $"
span.textContent = "23 $"
picture.src = "king.png"

/**  APPEND FOR MAIN */
body.appendChild(main)
main.appendChild(leftmain)
main.appendChild(rightmain)
leftmain.appendChild(mainh2One)
leftmain.appendChild(mainh2Two)
leftmain.appendChild(mainP)
leftmain.appendChild(mainh4)
leftmain.appendChild(numDiv)
numDiv.appendChild(mainh4one)
numDiv.appendChild(span)
numDiv.appendChild(arrow)
numDiv.appendChild(num18)
numDiv.appendChild(mainButton)
rightmain.appendChild(picture)

/** STYLING FOR THE MAIN**********/
main.style.color = "white"
main.style.display = "flex"
leftmain.style.height = "400px"
// leftmain.style.border = "3px solid red"
leftmain.style.width = "50%" 
leftmain.style.display = "flex"
leftmain.style.flexDirection = "column"
leftmain.style.justifyContent = "center"
leftmain.style.padding = "25px"
mainh2One.style.fontSize = "58px"
mainh2Two.style.fontSize = "58px"
mainh2Two.style.color = "#BFC200"
mainP.style.color = "rgba(230, 175, 46, 0.39)"
mainP.style.fontSize = "20px"
mainh4.style.fontSize = "32px"
numDiv.style.fontSize = "32px"
numDiv.style.display = "flex"
numDiv.style.alignItems = "center"
numDiv.style.gap = "15px"
numDiv.style.width = "fit-content"
span.style.fontWeight = "bold"
span.style.textDecoration = "line-through #BFC200 "
rightmain.style.width = "50%"
// rightmain.style.border = "3px solid blue"


// ***FOOTER//////

const foot = document.createElement("footer")
const foot1 = document.createElement("div")
const footh1 = document.createElement("h3")
const footp1 = document.createElement("p")
const foot2 = document.createElement("div")
const footh2 = document.createElement("h3")
const footp2 = document.createElement("p")
const foot3 = document.createElement("div")
const footh3 = document.createElement("h3")
const footp3 = document.createElement("p")


// *foot content/
footh1.textContent = "Collections"
footp1.textContent = "450+"
footh2.textContent = "Artist"
footp2.textContent = "320+"
footh3.textContent = "Community"
footp3.textContent = "15+"

// **/ FOOTER APPEND**********************************************************************************//
body.appendChild(foot)
foot.appendChild(foot1)
foot1.appendChild(footh1)
foot1.appendChild(footp1)
foot.appendChild(foot2)
foot2.appendChild(footh2)
foot2.appendChild(footp2)
foot.appendChild(foot3)
foot3.appendChild(footh3)
foot3.appendChild(footp3)

// FOR FOOT STYLE*/

foot.style.color ="white"
foot.style.display = "flex"
foot.style.gap = "30px"
foot.style.alignItems = "center"
// foot.style.border = "4px solid red"
foot.style.width = 'fit-content'
foot.style.borderRadius = "25px"
foot.style.background = "rgba(45, 45, 45, 0.51)"
foot.style.boxShadow = "28px 21px 59px 0px rgba(0, 0, 0, 0.11)"
foot.style.backdropFilter= "blur(33.5px)"






foot1.style.display = "flex"
foot1.style.flexDirection = "column"
foot1.style.gap = "10px"
footh1.style.fontSize = "30px"
footp1.style.fontSize = "50px"
footp1.style.fontWeight = "bold"

foot2.style.display = "flex"
foot2.style.flexDirection = "column"
foot2.style.gap = "10px"
footh2.style.fontSize = "30px"
footp2.style.fontSize = "50px"
footp2.style.fontWeight = "bold"

foot3.style.display = "flex"
foot3.style.flexDirection = "column"
foot3.style.gap = "10px"
footh3.style.fontSize = "30px"
footp3.style.fontSize = "47px"
footp3.style.fontWeight = "bold"



// script.js
function adjustLayout() {
  const contentDiv = document.getElementById('body');
  const windowWidth = window.innerWidth;

  if (windowWidth < 600) {
    contentDiv.style.fontSize = '14px';
  } else if (windowWidth < 1200) {
    contentDiv.style.fontSize = '16px';
  } else {
    contentDiv.style.fontSize = '18px';
  }
}














