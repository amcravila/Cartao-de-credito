function isValidCard () {

var cardNumber = (prompt("Digite o número do cartão de crédito:"));

  if (cardNumber === '') {
    return alert('Digite um número!');
  }
 
  if (!isNaN(cardNumber)) { 

    var arrayNumber = cardNumber.split('').reverse();
    var result = 0;

    for (i = 0; i < arrayNumber.length; i++) {
      if (i % 2 !== 0) {
        var product = arrayNumber[i]*2;
        if (product > 9)
          product -= 9;
          arrayNumber.splice(i, 1, product);
      }   
      result += parseInt(arrayNumber[i]);
    } 
    
    if (result % 10 === 0){
         alert("Número do Cartão de crédito VÁLIDO");
     } else {
       alert("Número do Cartão de crédito INVÁLIDO");
     }

  } else {
    return alert('Digite apenas números!'); 
  }
}

isValidCard();