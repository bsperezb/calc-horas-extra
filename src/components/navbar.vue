<template>
    <button>
        {{ message }}
    </button>

</template>

<script>
export default {
  data() {
    return {
      message: 'Hola mundo'
    }
  }
}
</script>

<style lang="css" scoped>
button {
    color: red;
    background-color: black;
}
</style>
