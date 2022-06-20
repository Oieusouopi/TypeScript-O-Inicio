"use strict";
class tv {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
        this.connectedTo = null;
    }
    getConnectedTo() {
        return this.connectedTo;
    }
    setConnectedTo(connectedTo) {
        if (connectedTo < 0)
            console.log('Sorry, connection unavailable!');
        this.connectedTo = connectedTo;
    }
    turnOn() {
        console.log(`Marca: ${this.brand}, Tamanho: ${this.size}in, Resolução: ${this.resolution}, Conexões: ${this.connections}, Conexão atual: ${this.connectedTo}`);
    }
}
const consul = new tv('consul', 158, '720p', ['HDMI', 'Ethernet', 'USB']);
consul.turnOn();
consul.setConnectedTo(0);
consul.turnOn();
consul.setConnectedTo(-1);
