class tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    // connectedTo: string;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }

    turnOn() {
        console.log(`Marca: ${this.brand}, Tamanho: ${this.size}in, Resolução: ${this.resolution}, Conexões: ${this.connections}`);
    }
}

const consul = new tv('consul', 158, '720p', ['HDMI', 'Ethernet', 'USB'] );
consul.turnOn();