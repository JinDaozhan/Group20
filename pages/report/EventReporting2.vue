<template>
  <div class="event-reporting">
    <header class="header">
      <div class="back-button">&#10094;</div>
      <h1>事件上报</h1>
      <div class="more-options">
        <span class="circle"></span>
      </div>
    </header>

    <div class="progress-bar">
      <div class="step active">
        <div class="step-number">1</div>
        <div class="step-label">第一步</div>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-label">第二步</div>
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-label">第三步</div>
      </div>
    </div>

    <div class="content">
      <h2>1.突发事件类型选择（单选）</h2>
      <div class="event-grid">
        <div v-for="event in events" :key="event.name" class="event-item" @click="selectEvent(event)">
          <div class="event-icon" v-html="event.icon"></div>
          <div class="event-name">{{ event.name }}</div>
        </div>
      </div>

      <div class="description-input">
        <textarea placeholder="请具体说明..." rows="3"></textarea>
      </div>

      <div class="mental-health-option">
        <p>是否报送心理健康中心</p>
        <div class="option-buttons">
          <button @click="setMentalHealth(true)" :class="{ active: mentalHealth === true }">是</button>
          <button @click="setMentalHealth(false)" :class="{ active: mentalHealth === false }">否</button>
        </div>
      </div>
    </div>
    <button class="next-button" @click="step2">下一步</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const events = [
  { name: '群体事件', icon: '👥' },
  { name: '重大疾病', icon: '🏥' },
  { name: '自杀', icon: '🔪' },
  { name: '失踪', icon: '🔍' },
  { name: '诈骗', icon: '🦹' },
  { name: '打架斗殴', icon: '🥊' },
  { name: '意外伤害', icon: '🤕' },
  { name: '偷盗', icon: '🦹‍♂️' },
  { name: '火灾(火险)', icon: '🔥' },
  { name: '交通事故', icon: '🚗' },
  { name: '心理问题', icon: '❤️' },
  { name: '传染性疾病等公共卫生事件', icon: '🦠' },
  { name: '网络舆情', icon: '💻' },
  { name: '其他', icon: '❓' },
];

const selectedEvent = ref(null);
const mentalHealth = ref(null);

const selectEvent = (event) => {
  selectedEvent.value = event;
};

const setMentalHealth = (value) => {
  mentalHealth.value = value;
};

const step2 = () => {
    uni.navigateTo({
        url: '/pages/report/EventReportingStep'
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

.back-button, .more-options {
  font-size: 20px;
}

.more-options {
  display: flex;
  align-items: center;
}

.circle {
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  margin-left: 5px;
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
  background-color: white;
}

h2 {
  font-size: 16px;
  color: #333;
  margin-bottom: 15px;
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.event-item {
  background-color: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.event-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.event-name {
  font-size: 12px;
}

.description-input {
  margin-top: 20px;
}

textarea {
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
}

.mental-health-option {
  margin-top: 20px;
}

.option-buttons {
  display: flex;
  gap: 10px;
}

.option-buttons button {
  flex: 1;
  padding: 10px;
  border: 1px solid #1890ff;
  border-radius: 20px;
  background-color: white;
  color: #1890ff;
  cursor: pointer;
}

.option-buttons button.active {
  background-color: #1890ff;
  color: white;
}

.next-button {
  width: 100%;
  padding: 15px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}
</style>