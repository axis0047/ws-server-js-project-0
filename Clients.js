export class Clients {
    constructor() {
        this.clientList = {};
        this.saveClient = this.saveClient.bind(this);
    }

    saveClient(clientId, client) {
        this.clientList[clientId] = client;
    }

    removeClient(client) {
        Object.keys(this.clientList).forEach(key => {
            if (this.clientList[key] === client) {
                delete this.clientList[key];
            }
        });
    }

    getClients() {
        return this.clientList;
    }
}