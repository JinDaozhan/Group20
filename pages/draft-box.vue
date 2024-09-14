<template>
  <div class="draft-box">
    <header class="header">
      <button class="back-button">
        <i class="icon-back"></i>
      </button>
      <h1 class="title">草稿箱</h1>
    </header>
    <main class="content" @click="particulars">
      <div v-for="draft in drafts" :key="draft.id" class="draft-item">
        <div class="draft-header">
          <div class="avatar">{{ draft.reporter.initial }}</div>
          <div class="reporter-name">{{ draft.reporter.name }}</div>
          <div class="draft-status">{{ draft.status }}</div>
        </div>
        <div class="draft-details">
          <div class="detail-row">
            <div class="detail-label">突发事件类型</div>
            <div class="detail-value">{{ draft.incidentType }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">是否报送心理健康中心</div>
            <div class="detail-value">{{ draft.reportedToMentalHealth }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">涉及学生人数</div>
            <div class="detail-value">{{ draft.studentsInvolved }}</div>
          </div>
          <div class="detail-description">
            <div class="description-label">突发事件概述：</div>
            <div class="description-content">{{ draft.description }}</div>
          </div>
          <div class="draft-date">创建事件:{{ draft.createdAt }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drafts = ref([
  {
    id: 1,
    reporter: { name: '周斌', initial: '斌' },
    status: '待提交',
    incidentType: '打架斗殴',
    reportedToMentalHealth: '是',
    studentsInvolved: 9,
    description: '打架斗殴打架斗殴打架斗殴打架斗殴打架斗殴',
    createdAt: '2023.03.20 12:12:12'
  },
  {
    id: 2,
    reporter: { name: '周斌', initial: '斌' },
    status: '待提交',
    incidentType: '打架斗殴',
    reportedToMentalHealth: '是',
    studentsInvolved: 9,
    description: '打架斗殴打架斗殴打架斗殴打架斗殴打架斗殴',
    createdAt: '2023.03.20 12:12:12'
  }
])

const particulars = () => {
    uni.navigateTo({
        url: '/pages/particulars/IncidentReportDetails'
    })
}
</script>

<style scoped>
.draft-box {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f0f0f0;
  height: 100vh;
}

.header {
  background-color: #4169E1;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 150px;
}

.content {
  padding: 1rem;
}

.draft-item {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.draft-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #4169E1;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 0.5rem;
}

.reporter-name {
  font-weight: bold;
  flex-grow: 1;
}

.draft-status {
  color: orange;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.detail-label {
  color: #666;
}

.detail-description {
  margin-top: 1rem;
}

.description-label {
  color: #666;
  margin-bottom: 0.5rem;
}

.draft-date {
  color: #666;
  font-size: 0.8rem;
  margin-top: 1rem;
}
</style>