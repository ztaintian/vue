<template>
  <div class="hello">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition
      :duration="9000"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">hello</p>
    </transition>
    <input v-model.number="number" v-focus type="number" step="20">
    <p>{{ animatedNumber }}</p>
    <anchored-heading></anchored-heading>  
    <VmEditor @upload="getHtml"></VmEditor>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'
import VmEditor from 'vm-editor'
export default {
  name: 'hello',
  components: {
    VmEditor
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      number: 0,
      animatedNumber: 0
    }
  },
  watch: {
    number: function (newValue, oldValue) {
      var vm = this
      console.log(oldValue, newValue)
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 500)
        .onUpdate(function () {
          console.log(this._object.tweeningNumber)
          vm.animatedNumber = this._object.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
