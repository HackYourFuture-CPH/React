const State = (initState = {}) => {

    const state = initState;
    const funcs = {};

   return Object.freeze({
        getState() {
           return state;
        },
        getProp(prop) {
           return state[prop];
        },
        setProp(prop, val) {
            const oldval = state[prop];
            state[prop] = val;
            if (prop in funcs) {
                funcs[prop].forEach(f => f(oldval, val));
            }
        },
        watch(prop, func) {
            if (!(prop in funcs)) {
                funcs[prop] = [];
            }
            funcs[prop].push(func);
        }
   });
};

export default State;