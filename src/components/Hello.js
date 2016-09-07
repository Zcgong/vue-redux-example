import Rahul from './Rahul';
import Rifat from './Rifat';
import Saddam from './Saddam';
import hoc from './hoc';

// import store from '../store';

const component = {
  components: { Rahul, Rifat, Saddam },
  props: ['msg', 'list', 'name'],
  template: `<div>
    {{ name }}
    <div class="hello">
      <h1>{{ msg }}!!</h1>
      <p v-on:click="dontClickMe"> {{ test }} </p>
    </div>
    <div>
      <rahul name='rahul'></rahul> <br>
      <rifat> </rifat> <br>
      <saddam> </saddam>
    </div>
</div>`,

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

export default hoc(mapStateAsProps)(component);
// export default connect(mapStateAsProps)(component);
// export default component;
