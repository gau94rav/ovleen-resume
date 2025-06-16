<script setup>
import Sidebar from "./components/Sidebar.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
</script>

<template>
  <div class="container">
    <Sidebar />
    <div class="content-container">
      <div class="content">
        <About />
        <Work />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
    align-items: center;
  }
  .content-container {
    height: 100vh;
    @media (max-width: 768px) {
      height: max-content;
    }
    .content {
      position: relative;
      overflow: auto;
      height: 100%;
      @media (max-width: 768px) {
        overflow: hidden;
      }
    }
  }
}
</style>
