<template>
  <div :class="['el-divider','el-divider-' + direction]" />
</template>

<script>
export default {
  name: 'ElDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator: function(value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style>

</style>
