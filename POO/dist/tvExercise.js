"use strict";
class tv {
    // connectedTo: string;
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(`Marca: ${this.brand}, Tamanho: ${this.size}in, Resolução: ${this.resolution}, Conexões: ${this.connections}`);
    }
}
const consul = new tv('consul', 158, '720p', ['HDMI', 'Ethernet', 'USB']);
consul.turnOn();
