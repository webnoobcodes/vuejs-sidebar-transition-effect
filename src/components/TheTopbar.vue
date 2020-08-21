<template>
  <div class="topbar">
    <div>
      <fa-icon class="icon" :icon="['fas', 'bars']" size="2x" @click="$emit('togglenav')" />
    </div>
    <div>
      <fa-icon class="icon-circle" :icon="['fas', 'search']" size="2x" />
      <fa-icon class="icon-circle" :icon="['fas', 'bell']" size="2x" />
      <fa-icon class="icon-circle" :icon="['fas', 'power-off']" size="2x" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .topbar {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    padding: 10px 16px;
    background-color: #222;
    border-bottom: 1px solid #000;
    box-shadow: 0 2px 4px #666;
    color: #fefefe;

    .icon {
      cursor: pointer;
    }

    .icon-circle {
      width: 32px;
      height: 32px;
      padding: 5px;
      margin-left: 10px;
      cursor: pointer;
      color: #222;
      background-color: #fefefe;
      border-radius: 50%;
    }
  }
</style>