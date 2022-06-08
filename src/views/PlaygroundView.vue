<script setup>
// eslint-disable-next-line
//import { Dropdown, Offcanvas, Popover } from 'bootstrap'
</script>

<template>
  <div class="container-fluid">
    <p>playground-view</p>
    <i class="icon-test"></i>
    <i class="icon-test-child"></i>
    <input type="checkbox" class="" />
  </div>
</template>

<style lang="scss">
@import "@/scss/bootstrap.scss";

.icon-test {
  @extend .bi, .bi-123;

  &-child {
    @extend .bi, .bi-activity;
  }
}
</style>
