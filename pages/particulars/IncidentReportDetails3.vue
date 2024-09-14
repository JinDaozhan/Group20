<template>
  <div class="incident-report">
    <header class="header">
      <button class="back-button">
        <i class="icon-back"></i>
      </button>
      <h1 class="title">详情</h1>
      <div class="header-actions">
        <button class="action-button">
          <i class="icon-more"></i>
        </button>
        <button class="action-button">
          <i class="icon-camera"></i>
        </button>
      </div>
    </header>
    <main class="content">
      <div v-for="(item, index) in reportItems" :key="index" class="report-item">
        <div class="item-content">
          <span class="item-title">{{ item.title }}</span>
          <button v-if="item.hasViewRecord" class="view-record-btn">查看记录</button>
        </div>
        <button class="dropdown-btn">
          <i class="icon-dropdown"></i>
        </button>
      </div>
      <div class="approval-process">
        <h2 class="section-title">审批流程</h2>
        <div class="process-item" v-for="(step, index) in approvalProcess" :key="index">
          <div class="step-icon" :class="step.status">{{ step.icon }}</div>
          <div class="step-content">
            <div class="step-role">{{ step.role }}</div>
            <div class="step-name">{{ step.name }}</div>
            <div class="step-status" :class="step.status">{{ step.statusText }}</div>
            <div v-if="step.comment" class="step-comment">{{ step.comment }}</div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="auto-save-hint">已为您实时保存数据</div>
      <button class="primary-btn">修改申请</button>
      <button class="secondary-btn">保存草稿</button>
    </footer>
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

const approvalProcess = ref([
  {
    role: '发起人（辅导员/学工办主任）',
    name: '张小白',
    status: 'completed',
    statusText: '已发起',
    icon: '张'
  },
  {
    role: '审批人（学院副书记）',
    name: 'ZHOUBIN',
    status: 'rejected',
    statusText: '审批驳回',
    icon: 'Z',
    comment: '驳回理由驳回理由驳回理由驳回理由驳回理由驳回理由驳回理由驳回理由驳回理由'
  },
  {
    role: '抄送人',
    name: '学工部张利副部长、学工部廖海宁副部长学院副书记、学工部刘元印、学工办主任心理中心教师孙灯勇',
    status: 'pending',
    statusText: '',
    icon: 'L'
  }
])
</script>

<style scoped>
.incident-report {
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

.header-actions {
  display: flex;
  gap: 1rem;
}

.action-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
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

.approval-process {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.process-item {
  display: flex;
  margin-bottom: 1rem;
}

.step-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step-icon.completed {
  background-color: #52c41a;
  color: white;
}

.step-icon.rejected {
  background-color: #f5222d;
  color: white;
}

.step-icon.pending {
  background-color: #d9d9d9;
  color: #8c8c8c;
}

.step-content {
  flex-grow: 1;
}

.step-role {
  font-size: 0.9rem;
  color: #8c8c8c;
}

.step-name {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.step-status {
  font-size: 0.9rem;
}

.step-status.completed {
  color: #52c41a;
}

.step-status.rejected {
  color: #f5222d;
}

.step-comment {
  font-size: 0.9rem;
  color: #8c8c8c;
  margin-top: 0.5rem;
}

.footer {
  padding: 1rem;
  background-color: white;
}

.auto-save-hint {
  text-align: center;
  color: #8c8c8c;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.primary-btn, .secondary-btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.primary-btn {
  background-color: #4169E1;
  color: white;
}

.secondary-btn {
  background-color: white;
  color: #4169E1;
  border: 1px solid #4169E1;
}
</style>