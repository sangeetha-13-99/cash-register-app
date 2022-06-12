import "./styles.css";

let cashAmountToPay=document.getElementById("amountToPayField");
let cashAmountGiven=document.getElementById("amountGivenField");
let amountToPayEnterButton=document.querySelector('.amountToPayEnterButton');
let amountGivenCheckButton=document.querySelector('.amountGivenCheckButton');
let errorMessage=document.querySelector('.errorMessage');
let denominationDiv=document.querySelector('.denominationDiv');
let notesReturned=document.querySelectorAll('.notesReturned')
let denominationArray=[2000,500,200,100,20,10,1];
cashAmountGiven.parentElement.classList.add('hide');
// amountGivenCheckButton.classList.add('hide');

amountToPayEnterButton.addEventListener('click',function(){
  errorMessage.innerHTML='';
  let cashAmountToPayValue=Number(cashAmountToPay.value.trim());
  if(cashAmountToPayValue!=="" && cashAmountToPayValue>0){
    cashAmountGiven.parentElement.classList.remove('hide');
  }
  else{
    errorMessage.innerHTML='enter valid bill amount to pay';
  }
})

amountGivenCheckButton.addEventListener('click',function(){
  errorMessage.innerHTML='';
  let cashAmountGivenValue=Number(cashAmountGiven.value.trim());
  let cashAmountToPayValue=Number(cashAmountToPay.value.trim());
  if(cashAmountGiven.value.trim()!==""){
    if(cashAmountGivenValue>=cashAmountToPayValue){
      // console.log(calculateDenominations(cashAmountGivenValue-cashAmountToPayValue));
      calculateDenominations(cashAmountGivenValue-cashAmountToPayValue);
    }
    else{
      errorMessage.innerHTML=`you have amount less than Bill Amount 😟`;
    }
  }
})

function calculateDenominations(amount){
  let noOfNotes;
  denominationArray.forEach(function(note,index){
     noOfNotes=Math.trunc(amount/note);
     amount=amount%note
     notesReturned[index].innerHTML=noOfNotes;
  })
}