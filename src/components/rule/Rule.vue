<template>
  <div class="rule">
    <div class="rule-dd" 
    :style="{ transform: transform }"
    @touchstart.prevent="startSlibe(this.event)"
    @touchmove.prevent="moveSlibe(this.event)"
    @touchend.prevent="endSlibe(this.event)"
    >
      <ul>
        <li>0</li>
        <li>5</li>
        <li>10</li>
        <li>5</li>
        <li>5</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rule',
  data () {
    return {
      startX: 0,
      touchX: 0,
      moveX: 0,

      transform: 'translate3d(0px,0px,0px)'
    }
  },
  methods: {
    startSlibe (ev) {
      this.touchX = ev.touches[0].clientX
    },
    moveSlibe (ev) {
      const mx = ev.touches[0].clientX - this.touchX + this.startX
      this.transform = 'translate3d(' + mx + 'px,0px,0px)'
      console.log(this.transform)
    },
    endSlibe (ev) {
      console.log(ev.changedTouches[0].clientX)
      console.log(ev.changedTouches[0])
    }

  }
}
</script>

<style lang="scss" scoped>
.rule {
  width:100%;
  height:10rem;
  border:1px solid red;
  overflow:hidden;

  &-dd {
    background-image:url(bg.png);
    display:inline-block;
    position:relative;
    width:10000px;
    height:inherit;
    
    & ul {
      & li {
        float:left;
        list-style:none;
        width:50px;
      }
    }

  }
}
</style>
