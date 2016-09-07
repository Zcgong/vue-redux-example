import store from '../store';

export default function (collect) {
  return function (children) {
    const data = collect(store.getState());
    const props = Object.keys(data).map(key => `:${key}='${key}'`).join(' ');
    const template = `<children ${props}></children>`;

    return {
      template,
      data: () => data,
      components: { children },
      created () {
        store.subscribe(() => {
          const state = collect(store.getState());

          Object.keys(state).forEach((key) => { // fixme: use a simple loop
            this[key] = state[key]
          });
        });
      }
    };
  }
};
