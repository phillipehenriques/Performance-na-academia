

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

async function loadingLog() {
    
    try {
        const arquivoJson = await fetch ('/arquivo.json')

        arquivoJson.then((response) => response.json())    
        arquivoJson.then((response) => {
        return response.json();
    })

    } catch {
        console.log('Erro ao carregar Json')
    }

    // import data from '/arquivo.json';
    // console.log(data);


    //return arquivoJson;
}

loadingLog()

// Chamado toda vez que a página é carregada e quando uma nova linha é adicionda
function populateTable(cabecalhosDaTabela) {
    var tabela = document.getElementById('tabeladeexercicios');

    // var documentoDeTexto = leArquivoDeTexto();

    // Para cada item no arquivo .json, adicionar uma linha com seus respectivos valores
    for(var linha = 0; linha < documentoDeTexto.length; linha++) { 
        var row = document.createElement('tr');

        // Criando uma célula para cada coluna no array
        for (var coluna = 0; coluna < cabecalhosDaTabela.length; coluna++) {
            var celula = document.createElement('td');
            // Escrevendo o valor dentro da celula
            celula.innerHTML = documentoDeTexto[linha][coluna];
            row.appendChild(celula, cabecalhosDaTabela);
        }
    }
}

populateTable(celula, cabecalhosDaTabela)

//TODO: lição de casa
// Chamada cada vez que o botão "adicionar" é acionado
function salvarLinha(celula) {

        var rowLogs = celula.value;

        // for (var registro = 0; log >= cabecalhosDaTabela.length; )

        if (rowLogs != null) {
            ('/arquivo.json') = celula.value
        }
        else {
            console.log ('erro ao carregar Json')
        }

        Array.forEach(element => {
            celula.innerHTML = element.value
        });


        
        // TENTANDO SALVAR ARQUIVO <<<<<<<<

        var arquivo = new Blob([userInput], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "dynamic.txt");
    }

    // Procura documento de texto existente
    // Se não existir, cria ele
    //Se existir, adiciona novos dados ao documento
    // Chama a função populateTable()

    populateTable()

{/* <div id="tableContainer">
    <table>
        <thead>
            <th>
                Batata
            </th>
        </thead>
    </table>
</div> */}

