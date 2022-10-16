

function createTable() {

    var cabecalhosDaTabela = ['Mês', 'IMC', 'Massa gorda', 'Massa magra', 'Ossos', 'Resíduos', 'Músculos', 'Água (%)', 'Taxa Metab.', 'Idade Metab.', 'Gordura Visc.']

    var tableContainer = document.getElementById('tableContainer');
    var table = document.createElement('table');
    table.id = 'tabeladeexercicios';
    var thead = document.createElement('thead');

    for (var index = 0; index < cabecalhosDaTabela.length; index ++) {
        var th = document.createElement('th');
        th.innerHTML = cabecalhosDaTabela[index]
        // thead.setAttribute('class', 'alignmentLeft');

        thead.appendChild(th);
    }

    table.appendChild(thead);
    tableContainer.appendChild(table);

    populateTable(cabecalhosDaTabela);
}

createTable(); // < cabecalhosDaTabela porque não da pra colocar aqui ?????????????????????????????

// Chamado toda vez que a página é carregada e quando uma nova linha é adicionda
function populateTable(cabecalhosDaTabela) {
    json = '[{ "Mês": "valor", "IMC": "valor", "Massa gorda": "valor", "Massa magra": "valor", "Ossos": "valor", "Resíduos": "valor", "Músculos": "valor", "Água (%)": "valor", "Taxa Metab.": "valor", "Idade Metab.": "valor", "Gordura Visc.": "valor" }] '
    var myJson = JSON.parse(json);

    console.log(myJson);
}

//TODO: lição de casa
// Chamada cada vez que o botão "adicionar" é acionado
// function salvarLinha(celula, cabecalhosDaTabela) {

//     var rowLogs = celula.value;

//     // for (var registro = 0; log >= cabecalhosDaTabela.length; )

//     if (rowLogs != null) {
//         ('/arquivo.json') = celula.value
//     }
//     else {
//         console.log ('erro ao carregar Json')
//     }

//     Array.forEach(element => {
//         celula.innerHTML = element.value
//     });


    
//     // TENTANDO SALVAR ARQUIVO <<<<<<<<

//     var arquivo = new Blob([userInput], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "dynamic.txt");
// }

//     // Procura documento de texto existente
//     // Se não existir, cria ele
//     //Se existir, adiciona novos dados ao documento
//     // Chama a função populateTable()

//     populateTable()

// {/* <div id="tableContainer">
//     <table>
//         <thead>
//             <th>
//                 Batata
//             </th>
//         </thead>
//     </table>
// </div> */}

