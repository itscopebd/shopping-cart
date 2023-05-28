
let getPrice= document.getElementById("phoneTotalPrice");
let getInnerText= getPrice.innerText;

function updateQuantity(value) {
   let caseUpdateNumber = 0;
   const caseNumverfield = document.getElementById("phoneInputfiled");
   const caseNumberString = caseNumverfield.value;
   const casePreviousNumber = parseInt(caseNumberString);

   if (value) {
      caseUpdateNumber = casePreviousNumber + 1;
getPrice.innerText= caseUpdateNumber * parseInt(getInnerText)
   }
   else if(casePreviousNumber < 2 ){
   alert("Your Quantity Not Remove....");
   return;
   }
   else{
      caseUpdateNumber = casePreviousNumber - 1; 
      const tatalPrice= getPrice.innerText;
      getPrice.innerText= parseInt(tatalPrice) - parseInt(getInnerText);
      
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

document.getElementById("phonePlus").addEventListener("click", function () {

    updateQuantity(true);
    calculate()

});

document.getElementById("phoneMinus").addEventListener("click", function () {
    updateQuantity(false);
    calculate()
})