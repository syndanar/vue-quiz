import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

/**
 * Хранилище данных списка CPE
 */
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
};
