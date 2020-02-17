export class Registro {

    public format: any;
    public text: any;
    public type: any;
    public icon: any;
    public created: Date;

    constructor(format: any,  text: any) {
        this.format = format;
        this.text = text;

        this.created = new Date();

        this.determinarTipo();
    }

    private determinarTipo() {

        const inicioTexto = this.text.substr(0, 4);
        console.log('Tipo', inicioTexto);

        switch (inicioTexto) {

            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;

            case 'geo':
                this.type = 'geo';
                this.icon = 'pin';
                break;

            default:
                this.type = 'No reconocido';
                this.icon = 'create';
        }
    }

}
