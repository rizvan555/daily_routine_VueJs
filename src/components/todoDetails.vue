<template>
  <div class="box">
    <div>
      <p>{{ todo.diary }}</p>
      <small class="date">{{ todo.date }}</small>
    </div>
    <div>
      <i class="material-icons">favorite</i>
      <i class="material-icons">delete</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
};
</script>
