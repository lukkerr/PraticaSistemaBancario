class ClienteController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
