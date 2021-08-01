class Clientes {

    private _clientes : Array<Cliente>;

    constructor () {
        this._clientes = new Array<Cliente>();

        const conta1 = new Conta("4",500);
        const conta2 = new Poupanca("5",100);
        const conta3 = new ContaBonificada("6",50000);

        const cl1 = new Cliente( "luciano","123.456.789-01", conta1 );
        const cl2 = new Cliente( "joao","124.456.789-05", conta2 );
        const cl3 = new Cliente( "gustavo","125.456.789-06", conta3 );

        this._clientes.push(cl1,cl2,cl3);
    }

    inserir ( cliente:Cliente ) : void {
        this._clientes.push(cliente);
    }

    remover ( cpf:string ) : void {
        const index = this.getIndex(cpf);
        if (index) this._clientes.splice(index, 1);
    }

    listar () : Array<Cliente> {
        return this._clientes;
    }

    pesquisar ( cpf:string ) : Cliente {
        return this._clientes.find( cliente => cliente.cpf === cpf );
    }

    private getIndex ( cpf:string ) : number {
        return this._clientes.indexOf( this.pesquisar(cpf) );
    }
}