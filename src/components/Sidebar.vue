<script setup>
import SeperatorIcon from "vue-material-design-icons/RayStartEnd.vue";
import {
  ProfileData,
  EducationData,
  CertData,
  InterestsData,
  KeySkills,
} from "../assets/constants";
</script>

<template>
  <div class="sidebar-container">
    <div class="sidebar-content">
      <div class="profile-pic-container">
        <img
          class="profile-pic"
          src="https://media.licdn.com/dms/image/v2/D4E03AQH78ugRxz5yYw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705476208085?e=1750291200&v=beta&t=NbWYMm_5LcF_weYp1dFH_tqQ9fNebdBc0bGOvGuSHDU"
        />
      </div>
      <div class="sidebar-section">
        <h2>Contact</h2>
        <div v-for="item in ProfileData" :key="item.id" class="profile-group">
          <div class="profile-icon">
            <component :is="item.icon" />
          </div>
          {{ item.text }}
        </div>
      </div>
      <div class="sidebar-section">
        <h2>Education</h2>
        <div class="section-group" v-for="item in EducationData" :key="item.id">
          <h3 class="section-title">{{ item.title }}</h3>
          <div v-for="cItem in item.items" :key="cItem.id">
            <div class="section-item-group">
              <div class="section-title">{{ cItem.title }}</div>
              <div class="section-text">- {{ cItem.text }}</div>
            </div>
          </div>
          <div class="seperator-icon" v-if="item.has_seperator">
            <SeperatorIcon />
          </div>
        </div>
      </div>
      <div class="sidebar-section">
        <h2>Certifications</h2>
        <div class="section-group" v-for="item in CertData" :key="item.id">
          <div class="section-item-group">
            <h3 class="section-title">{{ item.title }}</h3>
            <div class="section-subtext">{{ item.subtext }}</div>
            <div v-for="cItem in item.items" :key="cItem.id">
              <div class="section-item-group">
                <div class="section-text">- {{ cItem.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-section">
        <h2>Key Skills</h2>
        <ul>
          <li v-for="item in KeySkills" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="sidebar-section">
        <h2>Interests</h2>
        <ul>
          <li v-for="item in InterestsData" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-container {
  border-right: 1px solid #ffee58;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: max-content;
  height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: max-content;
    border-right: none;
  }
  .sidebar-content {
    overflow: auto;
    overflow-x: hidden;
    @media (max-width: 768px) {
      overflow: hidden;
    }
    .profile-pic-container {
      position: sticky;
      top: 0;
      margin: auto;
      background: #181818;
      padding: 1rem;
      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
      }
      .profile-pic {
        border-radius: 50%;
        border: 5px solid #ffee58;
      }
    }

    .sidebar-section {
      h2 {
        border-bottom: 1px solid #ffee58;
        padding: 0.3rem 1rem;
        color: #ffee58;
      }

      .profile-group {
        padding: 0.3rem 1rem;
        display: flex;
        gap: 1rem;
        padding-top: 10px;
        align-content: center;
      }

      .section-group {
        padding: 0.3rem 1rem;
        .section-item-group {
          max-width: 230px;
          padding-bottom: 1rem;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          @media (max-width: 768px) {
            max-width: 100%;
          }
        }

        .section-title,
        .section-subtext {
          font-weight: bold;
          color: #ffee5892;
        }
      }

      .seperator-icon {
        display: flex;
        justify-content: center;
      }

      ul {
        padding: 0 2rem;
        @media (max-width: 768px) {
          padding: 1rem 2rem;
        }
      }
    }
  }
}
</style>
