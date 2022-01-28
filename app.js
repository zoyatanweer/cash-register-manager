const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

//available notes we have
const availableNotes = [2000,500,100,20,10,5,1]


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount !==""){
     if( Number(billAmount.value>0) ){
            if ( (Number(cashGiven.value)) >= (Number (billAmount.value)) ) {
                // console.log(billAmount.value) 
                // console.log(cashGiven.value);
                const amountReturn = cashGiven.value - billAmount.value;
                // console.log(amountReturn);
                calculateChange(amountReturn)
            }
            else {
                showMessage("The cash provided should atleast be equal to the bill amount.")
            }
    }
    else {
        showMessage("Please enter the values.");
    }
}

})

const calculateChange = (amountReturn) => {
    for(let i = 0; i<availableNotes.length ; i++){
        const numberOfNotes =  Math.trunc( 
            amountReturn / availableNotes[i]
        );
    
    amountReturn = amountReturn%availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
    }
}

const hideMessage = () => message.style.display = "none";

const showMessage = (msg) =>{
    message.style.display="block";
    message.innerText = msg;
}
