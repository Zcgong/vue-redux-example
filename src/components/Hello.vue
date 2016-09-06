<template>
  {{ name }}
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-on:click="dontClickMe"> {{ test }} </p>
  </div>
  <rahul > </rahul> <br>
  <rifat> </rifat> <br>
  <saddam> </saddam> <br>
</template>

<script>
import Rahul from './Rahul';
import Rifat from './Rifat';
import Saddam from './Saddam';
import connect from './connect';

import store from '../store';

const component = {
  components: { Rahul, Rifat, Saddam },
  props: ['name'],
  data() {
    return {
      test: 'testing....'
    };
  },

  ready() {

  },

  methods: {
    dontClickMe() {
      console.log(this.msg);
    }
  }
};

const mapStateAsProps = (state) => {
  return {
    msg: state.app.msg,
    list: state.app.list,
  }
};

export default connect(mapStateAsProps)(component);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
