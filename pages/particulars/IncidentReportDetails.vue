<template>
  <div class="incident-report">
    <header class="header">
      <button class="back-button">
        <i class="icon-back"></i>
      </button>
      <h1 class="title">详情</h1>
      <button class="more-button">
        <i class="icon-more"></i>
      </button>
    </header>
    <main class="content">
      <div v-for="(item, index) in reportItems" :key="index" class="report-item">
        <div class="item-content">
          <span class="item-title">{{ item.title }}</span>
          <button v-if="item.hasViewRecord" class="view-record-btn" @click="particulars">查看记录</button>
        </div>
        <button class="dropdown-btn">
          <i class="icon-dropdown"></i>
        </button>
      </div>
      <div class="report-item">
        <div class="item-content">
          <span class="item-title">审批流程</span>
        </div>
        <button class="dropdown-btn">
          <i class="icon-dropdown"></i>
        </button>
      </div>
    </main>
    <footer class="footer">
      <button class="submit-btn" @click="approval">提交审批</button>
      <button class="save-draft-btn" @click="draft">保存草稿</button>
    </footer>
    <div class="auto-save-hint">已为您实时保存数据</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const reportItems = ref([
  { title: '1.突发事件类型选择（单选）', hasViewRecord: false },
  { title: '2.请选择对口心理中心教师（单选）', hasViewRecord: false },
  { title: '3.选定学生', hasViewRecord: false },
  { title: '4.突发事件概述', hasViewRecord: true },
  { title: '5.学生目前情况', hasViewRecord: true },
  { title: '6.风险分析研判', hasViewRecord: true },
  { title: '7.已采取的措施及当前状况', hasViewRecord: true },
  { title: '8.学院建议', hasViewRecord: true },
])

const draft = () => {
    uni.navigateTo({
        url: '/pages/draft-box'
    })
}

const approval = () => {
    uni.navigateTo({
        url: '/pages/approval/ApprovalList'
    })
}

const particulars = () => {
    uni.navigateTo({
        url: '/pages/particulars/SuddenEventRecord'
    })
}
</script>

<style scoped>
.incident-report {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f0f0f0;
  height: 100vh;
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
  overflow-y: auto;
  padding: 1rem;
}

.report-item {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-content {
  display: flex;
  align-items: center;
}

.item-title {
  font-size: 1rem;
  margin-right: 1rem;
}

.view-record-btn {
  background-color: transparent;
  color: #4169E1;
  border: 1px solid #4169E1;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.dropdown-btn {
  background-color: transparent;
  border: none;
  color: #4169E1;
  font-size: 1.2rem;
}

.footer {
  padding: 1rem;
}

.submit-btn, .save-draft-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.submit-btn {
  background-color: #4169E1;
  color: white;
}

.save-draft-btn {
  background-color: white;
  color: #4169E1;
  border: 1px solid #4169E1;
}

.auto-save-hint {
  text-align: center;
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}
</style>