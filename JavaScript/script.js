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

    populateTable();
}

createTable();

// Chamado toda vez que a página é carregada e quando uma nova linha é adicionda
function populateTable() {
    var tabela = document.getElementById('tabeladeexercicios');
    var row = document.createElement('tr');

    for (var linha = 0; linha < cabecalhosDaTabela.length; linha++) {
        var tableRow = document.createElement('tr')

        tr.setAttribute('class', 'celulaColuna')

        th.appendChild(tr)
    }
}

//TODO: lição de casa
// Chamada cada vez que o botão "adicionar" é acionado
function createRow() {
    // Procura documento de texto existente
    // Se não existir, cria ele
    //Se existir, adiciona novos dados ao documento
    // Chama a função populateTable()
    populateTable()
}

{/* <div id="tableContainer">
    <table>
        <thead>
            <th>
                Batata
            </th>
        </thead>
    </table>
</div> */}