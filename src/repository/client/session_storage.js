export class SessionStorageClient {
    #prefix = 'app';
    constructor() {
        sessionStorage
    }

    create(url, value) {
        url.split()
        sessionStorage.setItem(this.#prefix + url, value);
    }
    read(id) {
        return sessionStorage.getItem(this.#prefix + id);
    }
    update(id, value) {
        sessionStorage.setItem(id, value);
    }
    delete(id) {
        sessionStorage.removeItem(id);
    }
}