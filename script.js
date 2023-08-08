var livros = ['Dom Quixote','Cem Anos de Solidão','O Grande Gatsby','Dom Casmurro','1984','Harry Potter e a Pedra Filosofal','O senhor dos Anéis','Crime e Castigo','Orgulho e Preconceito','Guerra e Paz','A Revolução dos Bichos','O Pequeno Príncipe','O Apanhador no Campo de Centeio','As Crônicas de Nárnia','A Metamorfose','Hamlet','A Culpa é das Estrelas','O Alquimista','Anna Karenina','Os Miseráveis'];

// var livros = 'Dom Quixote';

var autores = ['Miguel de Cervantes','Gabriel García Márquez','F. Scott Fitzgerald','Machado de Assis','George Orwell','J.K. Rowling','J.R.R. Tolkien','Fiódor Dostoiévski','Jane Austen','Lev Tolstói','George Orwell','Antoine de Saint-Exupéry','J.D. Salinger','C.S. Lewis','Franz Kafka','William Shakespeare','John Green','Paulo Coelho','Lev Tolstói','Victor Hugo'];

var state = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

var lista = document.getElementById("tableLista");

// var lista = '<tbody id="tableLista"></tbody>'

function renderizar() {
    lista.innerHTML = "";

    document.getElementById("quantidade").innerHTML = "(Livros lidos: " + contarLivros() + ")";

    livros.forEach((livro,index) => {

        if (state[index] == 0) {
            lista.innerHTML += `
            <tr>
                <td class="item">${livro}</td>
                <td class="item">${autores[index]}</td>
                <td class="item">
                    <i class="bi bi-check2"></i>
                </td>
            </tr>
            `;
        } else {
            lista.innerHTML += `
            <tr>
                <td class="item">${livro}</td>
                <td class="item">${autores[index]}</td>
                <td class="item">
                    <button class="btn btn-success" type="button" onclick='emprestar(this.parentNode.parentNode.rowIndex)'>
                        <i class="bi bi-check2"></i>
                    </button>
                </td>
            </tr>
            `;
        };
    });
};

const emprestar = (i) => {
    state.splice(i - 1, 1, 0);
    renderizar();
};

const contarLivros = () => {
    var livros = 0;
    state.forEach(Element => {
        if (Element == 0) {
            livros ++;
        };
    });

    return livros;
};

renderizar();