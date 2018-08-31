function onlyNumbers(num) {
  var er = /[^0-9.]/;
  er.lastIndex = 0;
  var campo = num;
  if (er.test(campo.value)) {
    campo.value = "";
  }
};


$(document).ready(function() {
  $(".submit-btn").click(isValidCard);
});


function isValidCard () {

var cardNumber = $('#card-number').val();

    cardNumber = cardNumber.split('').reverse();
    var result = 0;

    for (i = 0; i < cardNumber.length; i++) {
      if (i % 2 !== 0) {
        var product = cardNumber[i]*2;
        if (product > 9)
          product -= 9;
          cardNumber.splice(i, 1, product);
      }
      result += parseInt(cardNumber[i]);
    }

    if (result % 10 === 0){
      alert("Número do Cartão de crédito VÁLIDO");
    } else {
      alert("Número do Cartão de crédito INVÁLIDO");
    }
    
};
