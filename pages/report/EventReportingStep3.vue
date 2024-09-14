<template>
  <div class="event-reporting">
    <header class="header">
      <div class="back-button">&#10094;</div>
      <h1>事件上报</h1>
      <div class="more-options">
        <div class="circle"></div>
      </div>
    </header>

    <div class="progress-bar">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-label">第一步</div>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-label">第二步</div>
      </div>
      <div class="step-line"></div>
      <div class="step active">
        <div class="step-number">3</div>
        <div class="step-label">第三步</div>
      </div>
    </div>

    <div class="content">
      <div class="section">
        <h2>4.突发事件概述</h2>
        <div class="info-text">
          <span class="info-icon">&#9432;</span>
          包括事件发生时间，地点，大致过程，紧急程度，破坏程度，人员伤亡，发展状态，影响程度评估等
        </div>
        <textarea v-model="eventDescription" placeholder="请说明..."></textarea>
      </div>

      <div class="section">
        <h2>5.学生目前情况</h2>
        <textarea v-model="studentSituation" placeholder="请说明..."></textarea>
      </div>

      <div class="section">
        <h2>6.风险分析研判</h2>
        <textarea v-model="riskAnalysis" placeholder="请评估..."></textarea>
      </div>

      <div class="section">
        <h2>7.已采取的措施及当前情况</h2>
        <textarea v-model="measuresTaken" placeholder="请评估..."></textarea>
      </div>

      <div class="section">
        <h2>8.学院建议</h2>
        <textarea v-model="suggestions" placeholder="请填写学院建议..."></textarea>
      </div>

      <div class="workflow">
        <h2>审批流程</h2>
        <div class="workflow-item">
          <div class="avatar" style="background-color: #F5A623;">张</div>
          <div class="workflow-info">
            <div class="workflow-title">发起人（辅导员/学工办主任）</div>
            <div class="workflow-name">张小白</div>
            <div class="workflow-status">已发起</div>
          </div>
        </div>
        <div class="workflow-line"></div>
        <div class="workflow-item">
          <div class="avatar" style="background-color: #4A90E2;">Z</div>
          <div class="workflow-info">
            <div class="workflow-title">审批人（学院副书记）</div>
            <div class="workflow-name">ZHOUBIN</div>
            <div class="workflow-status">审批中</div>
          </div>
        </div>
        <div class="workflow-line"></div>
        <div class="workflow-item">
          <div class="avatar" style="background-color: #7ED321;">L</div>
          <div class="workflow-info">
            <div class="workflow-title">抄送人</div>
            <div class="workflow-name">学工部张利副部长、学工部房海宇副部长学生处刘元印、学工办主任心理中心教师杜鹃</div>
          </div>
        </div>
      </div>

      <div class="data-saved">已为您实时保存数据</div>

      <div class="button-group">
        <button class="primary-button" @click="approval">提交审批</button>
        <button class="secondary-button" @click="draft">保存草稿</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const eventDescription = ref('');
const studentSituation = ref('');
const riskAnalysis = ref('');
const measuresTaken = ref('');
const suggestions = ref('');

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
</script>

<style scoped>
.event-reporting {
  font-family: Arial, sans-serif;
  max-width: 420px;
  margin: 0 auto;
  background-color: #f0f0f0;
  min-height: 100vh;
}

.header {
  background-color: #1890ff;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button {
  font-size: 20px;
  cursor: pointer;
}

.more-options {
  display: flex;
  align-items: center;
}

.more-options span {
  margin-right: 5px;
}

.circle {
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
}

.progress-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.step.active .step-number {
  background-color: #1890ff;
}

.step-label {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

.step-line {
  flex-grow: 1;
  height: 2px;
  background-color: #ccc;
  margin: 0 10px;
}

.content {
  padding: 20px;
}

.section {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

h2 {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.info-text {
  background-color: #FFF7E6;
  border-radius: 4px;
  padding: 10px;
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
}

.info-icon {
  color: #FAAD14;
  margin-right: 5px;
}

textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  resize: vertical;
}

.workflow {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.workflow-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-right: 10px;
}

.workflow-info {
  flex-grow: 1;
}

.workflow-title {
  font-size: 14px;
  color: #666;
}

.workflow-name {
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
}

.workflow-status {
  font-size: 12px;
  color: #1890ff;
}

.workflow-line {
  width: 2px;
  height: 20px;
  background-color: #e8e8e8;
  margin-left: 19px;
  margin-bottom: 15px;
}

.data-saved {
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-bottom: 15px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.primary-button, .secondary-button {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.primary-button {
  background-color: #1890ff;
  color: white;
  border: none;
}

.secondary-button {
  background-color: white;
  color: #1890ff;
  border: 1px solid #1890ff;
}
</style>