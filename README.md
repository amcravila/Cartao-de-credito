# Cartao-de-credito

*VALIDADOR DE NÚMERO DE CARTÃO DE CRÉDITO UTILIZANDO O ALGORITMO DE LUHN*


**VARIÁVEIS:**

cardNumber: recebe o número do Cartão de Crédito digitado pelo usuário
product: efetua a multiplicação dos números de posições pares
result: apresenta a soma dos números

**FUNÇÕES:**
isValidNumber: nome da função de validação de número de cartão de crédito


INÍCIO

Solicita ao usuário a digitação do NÚMERO DO CARTAO DE CRÉDITO

Efetua validação de entrada: o usuário não deve ser capaz de inserir um campo vazio ou de um tipo incorreto

Cria um ARRAY e inverte as posições 

Identifica as posições pares (considerar que as posições começam de 1, mas como o índice começa de 0, selecionar as posições ímpares)

Para cada número de posição IMPAR, multiplica por 2

Se o produto for maior que 9, subrai 9

Substitui no ARRAY esse resultado, na mesma posição do número inicial

Soma todos os números desse ARRAY (considerando as posições ímpares novas e também as pares originais)

Se o resultado for divisivel por 10 (% 10 === 0), imprime "Número Válido"

Senão, imprime "Número Inválido"

FIM


***FLUXOGRAMA***
![Fluxograma Cartão de Crédito](https://github.com/amcravila/Cartao-de-credito/blob/master/Fluxograma-Cartao-de-credito.png)
