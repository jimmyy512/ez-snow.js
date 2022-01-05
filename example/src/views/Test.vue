<template lang="">
  <div>
      init
  </div>
</template>

<script>
import ezSnow from '../../../dist/ezSnow.umd'
export default {
  mounted () {
    new ezSnow("body",require("@/assets/image/snow2.png")).init();
  },
}
</script>
<style lang="">
  
</style>