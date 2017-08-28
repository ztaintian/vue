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
    <p id="p" @click="all">{{ animatedNumber }}</p>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'
// import $ from 'jquery'
export default {
  name: 'hello',
  components: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true,
      number: 0,
      animatedNumber: 0
    }
  },
  mounted () {
    class Point {
      add () {
        return 1
      }
    }
    class ColorPoint extends Point {}
    let bb = new ColorPoint()
    let aa = new Point()
    console.log(Object.getPrototypeOf(ColorPoint) === Point )
    console.log(bb.add())
    console.log(aa.add())
    let arr = [1,2,3]
    let hh = (x,y,z) =>{
      console.log(x,y,z)
    }
    hh(2,...arr)
  },
  methods: {
    all: function () {
      console.log($('#p').html('uuu'))
    }
  },
  watch: {
    number: function (newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 500)
        .onUpdate(function () {
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
