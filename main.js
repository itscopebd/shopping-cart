
let casePrice= document.getElementById("casePrice");
let getCasePrice= casePrice.innerText;

function updateMinus(value) {

   let caseUpdateNumber = 0;
   const caseNumverfield = document.getElementById("caseNumberField");
   const caseNumberString = caseNumverfield.value;
   const casePreviousNumber = parseInt(caseNumberString);

   if (value) {
      caseUpdateNumber = casePreviousNumber + 1;
      casePrice.innerText= caseUpdateNumber * parseInt(getCasePrice)
   }
   else if(casePreviousNumber < 2 ){
   alert("Your Quantity Not Remove....");
   return;
   }
   else{
      caseUpdateNumber = casePreviousNumber - 1; 
      const tatalPrice= casePrice.innerText;
      casePrice.innerText= parseInt(tatalPrice) - parseInt(getCasePrice);
      
   }

   caseNumverfield.value = caseUpdateNumber;
}




function subTotal(element){
   const getTotalPrice= document.getElementById(element).innerText;
   const currentNumber= parseInt(getTotalPrice)
   return currentNumber;


}
function calculate(){

   const currentCasetotalPrice=subTotal("casePrice");
   const currentPhonetotalPrice=subTotal("phoneTotalPrice");
const currentSubTotal= currentCasetotalPrice + currentPhonetotalPrice;
const subTotalElement=document.getElementById("sub-total");
subTotalElement.innerText=currentSubTotal;
}


document.getElementById("casePluse").addEventListener("click", function () {

   updateMinus(true);

   calculate()
});

document.getElementById("caseMinuse").addEventListener("click", function () {
   updateMinus(false);
   calculate()
})


function generatePin(){ return Math.floor(Math.random()*90000) + 10000; }
generatePin()
