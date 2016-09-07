import Rahul from './Rahul';
import Rifat from './Rifat';
import Saddam from './Saddam';

// import store from '../store';

const component = {
  components: { Rahul, Rifat, Saddam },
  props: ['msg', 'list', 'name'],

  render (h) { // <-- h must be in scope
    return <div>
      { this.name }
      <div class="hello">
        <h1>{ this.msg }!!</h1>
        <p on-click={this.dontClickMe}> { this.test } </p>
      </div>
      <div>
        <rahul name='rahul' />
        <br />
        <rifat />
        <br />
        <saddam />
      </div>
    </div>;
  },

  data () {
    return {
      test: 'testing....'
    };
  },

  methods: {
    dontClickMe () {
      console.log(this.msg);
    }
  }
};

const mapStateAsProps = (state) => {
  return {
    msg: state.app.msg,
    list: state.app.list
  }
};

import hoc from './hoc';
// import connect from './connect';
export default hoc(mapStateAsProps)(component);
// export default connect(mapStateAsProps)(component);
// export default component;
