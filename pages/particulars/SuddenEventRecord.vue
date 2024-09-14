<template>
  <div class="event-record">
    <header class="header">
      <h1>突发事件概述记录</h1>
    </header>

    <div class="content">
      <div v-for="(record, index) in records" :key="index" class="record-item">
        <h2 class="record-number">{{ records.length - index }}. {{ record.date }} {{ record.time }}</h2>
        <p class="record-description">{{ record.description }}</p>
        <div class="record-author">
          <div class="author-avatar" :style="{ backgroundColor: record.avatarColor }">
            {{ record.authorInitial }}
          </div>
          <span class="author-name">记录人：{{ record.author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const records = ref([
  {
    date: '2023.03.23',
    time: '12:00:00',
    description: '报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结',
    author: '侯杰',
    authorInitial: '侯',
    avatarColor: '#4A90E2'
  },
  {
    date: '2023.03.22',
    time: '12:00:00',
    description: '报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结',
    author: '吴霞',
    authorInitial: '吴',
    avatarColor: '#4A90E2'
  },
  {
    date: '2023.03.21',
    time: '12:00:00',
    description: '报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结',
    author: '姚秀兰',
    authorInitial: '姚',
    avatarColor: '#4A90E2'
  },
  {
    date: '2023.03.20',
    time: '12:00:00',
    description: '报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结报告总结',
    author: '张明',
    authorInitial: '张',
    avatarColor: '#4A90E2'
  }
]);
</script>

<style scoped>
.event-record {
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

.content {
  padding: 20px;
}

.record-item {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.record-number {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.record-description {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.record-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-right: 10px;
}

.author-name {
  font-size: 14px;
  color: #666;
}
</style>