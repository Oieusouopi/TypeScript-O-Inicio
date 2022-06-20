class tv {
    private brand: string;
    private size: number;
    private resolution: string;
    private connections: string[];
    private connectedTo: number | null;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
        this.connectedTo = null;
    }
    
    getConnectedTo() {
        return this.connectedTo;
    }

    setConnectedTo(connectedTo: number) {
        if(connectedTo < 0) console.log('Sorry, connection unavailable!');
        this.connectedTo = connectedTo;
    }

    turnOn() {
        console.log(`Marca: ${this.brand}, Tamanho: ${this.size}in, Resolução: ${this.resolution}, Conexões: ${this.connections}, Conexão atual: ${ this.connectedTo }`);
    }
}

const consul = new tv('consul', 158, '720p', ['HDMI', 'Ethernet', 'USB'] );
consul.turnOn();
consul.setConnectedTo(0);
consul.turnOn();
consul.setConnectedTo(-1);