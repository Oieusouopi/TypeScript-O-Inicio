class tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo: string | null;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
        this.connectedTo = null;
    }
    
    setConnectedTo(connectedTo: string) {
        this.connectedTo = connectedTo;
    }

    turnOn() {
        console.log(`Marca: ${this.brand}, Tamanho: ${this.size}in, Resolução: ${this.resolution}, Conexões: ${this.connections}, Conexão atual: ${ this.connectedTo }`);
    }
}

const consul = new tv('consul', 158, '720p', ['HDMI', 'Ethernet', 'USB'] );
consul.turnOn();
consul.setConnectedTo('Ethernet');
consul.turnOn();