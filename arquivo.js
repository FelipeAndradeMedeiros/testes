alert('Esta é uma calculadora de multiplicaçao, mas antes de usa-la prove que sabe nesse teste.')
var res = parseInt(prompt('Quanto é 5x5'))
if (res === 25){
    alert('Certo voce pode usar a calculadora')

 var res2 = prompt('preparado? (Digite "sim" para continuar)')
 if (res2.toLowerCase() === 'sim'){
 var n1 = parseInt(prompt('Digite um numero: '))
 var n2 = parseInt(prompt('Digite outro numero: '))
 var n3 = n1 * n2
 alert('A sua tabuada foi ' + n1 + 'X' + n2 + ' e o resultado foi ' + n3)
 }
 else{
   alert('Então não use')
 }

}
else{
    alert('Voce errou nao podera usar a calculadora')
    alert("Aqui esta a tabuada do 5: 5x1=5 5x2=10 5x3=15 5x4=20 5x5=25 5x6=30 5x7=35 5x8=40 5x9=45 5x10=50 TENTE NOVAMENTE O TESTE")
}

document.getElementById('reset-button').addEventListener('click', function() {
    // Recarrega a página
    location.reload();
});
document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
    let currentNumber = '';
    let previousNumber = '';
    let operation = null;

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            currentNumber += button.textContent;
            display.textContent = currentNumber;
        });
    });

    document.getElementById('multiply').addEventListener('click', () => {
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            operation = '*';
        }
    });

    document.getElementById('equals').addEventListener('click', () => {
        if (previousNumber !== '' && currentNumber !== '' && operation !== null) {
            let result;
            switch (operation) {
                case '*':
                    result = parseFloat(previousNumber) * parseFloat(currentNumber);
                    break;
                // Adicione outras operações aqui
            }
            display.textContent = result;
            currentNumber = result;
            previousNumber = '';
            operation = null;
        }
    });

    document.getElementById('reset-button').addEventListener('click', () => {
        display.textContent = '0';
        currentNumber = '';
        previousNumber = '';
        operation = null;
    });
});