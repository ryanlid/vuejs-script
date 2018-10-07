<template>
  <div>
    <p>{{msg}}</p>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Alert',
    props: {
      msg: {
        type: String,
        default: 'Hello'
      }
    },
    data() {
      return {};
    },
  }

</script>
