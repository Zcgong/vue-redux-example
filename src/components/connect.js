import store from '../store';

function bindContextToCallables(object, context) {
  const keys = Object.keys(object);
  keys.forEach(key => { // fixme: use a simple loop
    if( typeof object[key] === 'function' ) {
      object[key] = object[key].bind(context)
    }
  });
};

function getLocalState(data, context) {
  if(typeof data === 'function') {
    return data.call(context);
  } else if(data && Object.keys(data).length) {
    return data;
  }

  return {};
}

export default function(collect) {
  return function(component) {
    return {
      ...component,

      data() {
        const globalState = collect(store.getState());
        const localState = getLocalState(component.data, this);

        return {
          ...localState,
          ...globalState
        };
      },

      created() {
        bindContextToCallables(component, this);

        if(component.created) component.created();

        store.subscribe(() => {
          const state = collect(store.getState());

          Object.keys(state).forEach((key) => { // fixme: use a simple loop
            // fixme: what if the key did not exist
            this[key] = state[key]
          });
        });
      }

    };

  }
}
