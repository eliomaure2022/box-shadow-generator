const width = document.querySelector(".width-px");
const widthRange = document.querySelector(".width-range");

const height = document.querySelector(".height-px");
const heightRange = document.querySelector(".height-range");

const border = document.querySelector(".br-px");
const borderRange = document.querySelector(".br-range");

const shadowColor = document.querySelector('[type="color"]');

const hShadow = document.querySelector(".hs-px");
const hShadowRange = document.querySelector(".hs-range");

const vShadow = document.querySelector(".vs-px");
const vShadowRange = document.querySelector(".vs-range");

const blurS = document.querySelector(".blur-px");
const blurRange = document.querySelector(".blur-range");

const spread = document.querySelector(".sr-px");
const spreadRange = document.querySelector(".sr-range");

const square = document.querySelector(".box");

const getResult = document.querySelector('[type="button"]')
const shadowResult = document.querySelector(".shadow-result")
const widthResult = document.querySelector(".width-result")
const heightResult = document.querySelector(".height-result")
const radiusResult = document.querySelector(".radius-result")


let widthValue = 0;
let heightValue = 0;
let borderValue = 0;
let shadowColorValue = "black";
let hShadowValue = 0;
let vShadowValue = 0;
let blurValue = 0;
let spreadValue = 0;


hShadowRange.addEventListener("input", (e) => {
  hShadow.innerHTML = `${e.target.value}px`;
  hShadowValue = e.target.value;
  square.style.boxShadow = 
    `${e.target.value}px ${vShadowValue}px ${blurValue}px ${spreadValue}px  ${shadowColorValue}`  ;
});

vShadowRange.addEventListener("input", (e) => {
  vShadow.innerHTML = `${e.target.value}px`;
  vShadowValue = e.target.value;
  square.style.boxShadow = 
    `${hShadowValue}px ${e.target.value}px ${blurValue}px  ${spreadValue}px ${shadowColorValue}` ;
});

blurRange.addEventListener("input", (e) => {
  blurS.innerHTML = `${e.target.value}px`;
  blurValue = e.target.value;
  square.style.boxShadow =
    `${hShadowValue}px ${vShadowValue}px ${e.target.value}px  ${spreadValue}px ${shadowColorValue}`;
}) ; 

spreadRange.addEventListener("input", (e) => {
  spread.innerHTML = `${e.target.value}px` ;
  spreadValue = e.target.value;
  square.style.boxShadow =
    `${hShadowValue}px ${vShadowValue}px ${blurValue}px ${e.target.value}px  ${shadowColorValue}`;
});

shadowColor.addEventListener("input", (e) => {
  shadowColorValue = e.target.value;
  square.style.boxShadow =
  `${hShadowValue}px ${vShadowValue}px ${blurValue}px ${spreadValue}px ${e.target.value}px `;
  
});

widthRange.addEventListener("input", (e) => {
  width.innerHTML = `${e.target.value}px`;
  widthValue = e.target.value;
  square.style.width = 
    `${e.target.value}px`; 
});

heightRange.addEventListener("input", (e) => {
  height.innerHTML = `${e.target.value}px`;
  heightValue = e.target.value;
  square.style.height = 
    `${e.target.value}px`;
});

borderRange.addEventListener("input", (e) => {
  border.innerHTML = `${e.target.value}px`;
  borderValue = e.target.value;
  square.style.borderRadius =
   `${e.target.value}px`;
});

getResult.addEventListener("click", () => {
  shadowResult.innerHTML = `box-shadow: ${hShadowValue}px ${vShadowValue}px  ${blurValue}px ${spreadValue}px ${shadowColorValue};`;
  widthResult.innerHTML = `width: ${widthValue}px;`;
  heightResult.innerHTML = `height: ${heightValue}px;`;
  radiusResult.innerHTML = `border-radius: ${borderValue}px;`;

});

