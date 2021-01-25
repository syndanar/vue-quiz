let hub = {};
const on = (event, callback) => {
    if(typeof event === 'string' && typeof callback === 'function') {
        !hub[event] && (hub[event] = []);
        hub[event].push(callback);
    }
}

const off = (event, callback) => {
    const i = (hub[event] || []).findIndex(h => h === callback);
    if (i > -1) hub[event].splice(i, 1);
    if (hub[event].length === 0) delete hub[event];

}

const emit = (event, data = null) => {
    (hub[event] || []).forEach(callback => setTimeout(callback(data)));
}

export default {
    on,
    off,
    emit
}
