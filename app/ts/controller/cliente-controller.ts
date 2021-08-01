class ClienteController {

    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNumero =
            <HTMLInputElement>document.querySelector("#conta")
        this.inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");

        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value));
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach( cliente => this.inserirClienteNoHTML(cliente) );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();

        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}