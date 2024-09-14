<template>
  <div class="approval-list">
    <header class="header">
      <button class="back-button">
        <i class="icon-back"></i>
      </button>
      <h1 class="title">发布审批</h1>
      <button class="more-button">
        <i class="icon-more"></i>
      </button>
    </header>
    <main class="content" @click="particulars">
      <div v-for="report in reports" :key="report.id" class="report-item">
        <div class="report-header">
          <div class="avatar">{{ report.reporter.initial }}</div>
          <div class="reporter-name">{{ report.reporter.name }}</div>
          <div :class="['report-status', report.status.class]">{{ report.status.text }}</div>
        </div>
        <div class="report-details">
          <div class="detail-row">
            <div class="detail-label">突发事件类型</div>
            <div class="detail-value">{{ report.incidentType }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">是否报送心理健康中心</div>
            <div class="detail-value">{{ report.reportedToMentalHealth }}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">涉及学生人数</div>
            <div class="detail-value">{{ report.studentsInvolved }}</div>
          </div>
          <div class="detail-description">
            <div class="description-label">突发事件概述：</div>
            <div class="description-content">{{ report.description }}</div>
          </div>
          <div class="report-date">创建事件:{{ report.createdAt }}</div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <p class="footer-note">审批通过件自动立案，不在本页展示</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const reports = ref([
  {
    id: 1,
    reporter: { name: '周斌', initial: '周' },
    status: { text: '审批中', class: 'status-reviewing' },
    incidentType: '打架斗殴',
    reportedToMentalHealth: '是',
    studentsInvolved: 9,
    description: '打架斗殴打架斗殴打架斗殴打架斗殴打架斗殴',
    createdAt: '2023.03.20 12:12:12'
  },
  {
    id: 2,
    reporter: { name: '周斌', initial: '周' },
    status: { text: '审批驳回', class: 'status-rejected' },
    incidentType: '打架斗殴',
    reportedToMentalHealth: '是',
    studentsInvolved: 9,
    description: '打架斗殴打架斗殴打架斗殴打架斗殴打架斗殴',
    createdAt: '2023.03.20 12:12:12'
  }
])

const particulars = () => {
    uni.navigateTo({
        url: '/pages/particulars/IncidentReportDetails2'
    })
}
</script>

<style scoped>
.approval-list {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
}

.content {
  flex-grow: 1;
  padding: 1rem;
}

.report-item {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.report-header {
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

.report-status {
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.status-reviewing {
  color: #4169E1;
  background-color: #E6F7FF;
}

.status-rejected {
  color: #FF4D4F;
  background-color: #FFF1F0;
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

.report-date {
  color: #666;
  font-size: 0.8rem;
  margin-top: 1rem;
}

.footer {
  padding: 1rem;
  background-color: #f0f0f0;
}

.footer-note {
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}
</style>