<template>
    <header>
        <h1>{{ pagetitle }}</h1>
    </header>
</template>

<script>

export default {
        name: 'Header',
        props: {
            pagetitle: String,
        },
}
</script>

<style scoped>
header {
  display: flex;
  color: dimgray;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
}
</style>