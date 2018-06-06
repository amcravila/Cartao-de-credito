# Cartao-de-credito

*VALIDADOR DE NÚMERO DE CARTÃO DE CRÉDITO UTILIZANDO O ALGORITMO DE LUHN*


**VARIÁVEIS:**

cardNumber: recebe o número do Cartão de Crédito digitado pelo usuário
product: efetua a multiplicação dos números de posições pares
result: apresenta a soma dos números


INÍCIO

Solicita ao usuário a digitação do NÚMERO DO CARTAO DE CRÉDITO

Efetua validação de entrada: o usuário não deve ser capaz de inserir um campo vazio ou de um tipo incorreto

Cria um ARRAY e inverter as posições 

Identifica as posições pares (considerar que as posições começam de 1, mas o índice começa de 0)

Para cada número de posição PAR, multiplicar por 2 

Se o produto for maior que 9, subraia 9

Substitua no ARRAY esse resultado, na mesma posição do número inicial

Some todos os números desse ARRAY (considerando as posições pares novas e também as ímpares originais)

Se o resultado for divisivel por 10 ( % 10 === 0), imprime "Número Válido"

Senão, imprime "Número Inválido"

FIM


***FLUXOGRAMA***
![Fluxograma Cartão de Crédito](C:\Users\Amanda\Desktop\Laboratoria\Sprint1\Produtos-Finais\Cartao-de-credito\Fluxograma-Cartao-de-credito.PNG)
