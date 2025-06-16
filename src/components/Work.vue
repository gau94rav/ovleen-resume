<script setup>
import { WorkData } from "../assets/constants";
</script>

<template>
  <div class="work-container">
    <h2>Work Experience</h2>
    <div class="work-section" v-for="item in WorkData" :key="item.id">
      <h3 class="header">{{ item.title }}</h3>
      <h5 class="sub-header">
        {{ item.subtext }}
        <div>{{ item.dates.start }} - {{ item.dates.end }}</div>
      </h5>
      <h5>Roles & Responsibilities</h5>
      <ul>
        <li v-for="(role, index) in item.roles" :key="index">
          {{ role }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-container {
  padding: 3rem;
  border-bottom: 1px solid #ffee58;
  @media (max-width: 768px) {
    border-bottom: none;
    padding: 0px;
    h2 {
      border-bottom: 1px solid #ffee58;
      padding: 0.3rem 1rem;
    }
    .work-section {
      padding: 0.3rem 1rem;
    }
  }
  h2 {
    color: #ffee58;
  }
  h3 {
    color: #ffee58cb;
  }
  h5 {
    color: #ffee5892;
  }
  .work-section {
    padding-bottom: 4rem;
    .sub-header {
      display: flex;
      justify-content: space-between;
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
}
</style>
