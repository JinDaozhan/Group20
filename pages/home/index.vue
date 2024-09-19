<script setup lang="ts">
import { ref } from 'vue'

// 定义响应式变量
const activeTab = ref('unresolved')

// 定义方法
const report = () => {
    uni.navigateTo({
        url: '/pages/report/EventReporting2'
    })
}

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

const more = () => {
    uni.navigateTo({
        url: '/pages/more'
    })
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 p-4">
    <div class="max-w-md mx-auto">
      <header class="flex justify-between items-center mb-6">
      </header>

      <h1 class="text-white text-2xl font-bold mb-6">学生突发事件报告</h1>

      <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 mb-4 flex items-center">
        <div class="bg-white rounded-full p-2 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <div @click="report">
          <div class="text-white text-lg font-bold">事件上报</div>
          <div class="text-white text-sm">INCIDENT REPORTING</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-white rounded-lg p-4 flex items-center">
          <div class="bg-blue-100 rounded-full p-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div @click="draft">
            <div class="text-gray-800 font-bold">草稿箱</div>
            <div class="text-gray-600 text-sm">DRAFTS</div>
          </div>
          <div class="ml-auto bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">12</div>
        </div>
        <div class="bg-white rounded-lg p-4 flex items-center">
          <div class="bg-teal-100 rounded-full p-2 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div @click="approval">
            <div class="text-gray-800 font-bold">立案审批</div>
            <div class="text-gray-600 text-sm">FILING&APPROVAL</div>
          </div>
          <div class="ml-auto bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</div>
        </div>
      </div>

    <view class="incident-list">
      <view class="tabs">
        <text :class="['tab', activeTab === 'unresolved' ? 'active' : '']" @click="activeTab = 'unresolved'">未结案</text>
        <text :class="['tab', activeTab === 'resolved' ? 'active' : '']" @click="activeTab = 'resolved'">已结案</text>
      </view>

      <view v-if="activeTab === 'unresolved'" class="incidents">
        <view v-for="i in 1" :key="i" class="incident">
          <view class="incident-header">
            <text class="date">创建于:2024.09.17</text>
            <text class="status">未结案</text>
          </view>
          <view class="incident-details">
            <view class="detail-item">
              <text class="detail-title">突发事件类型：</text>
              <text class="detail-subtitle">打架斗殴</text>
            </view>
            <view class="detail-item">
              <text class="detail-title">是否报送心理健康中心：</text>
              <text class="detail-subtitle">是</text>
            </view>
            <view class="detail-item">
              <text class="detail-title">涉及学生人数：</text>
              <text class="detail-subtitle">9</text>
            </view>
          </view>
          <view class="incident-summary">
            <text class="summary-title">突发事件概述：</text>
            <text class="summary-content">打架斗殴打架斗殴打架斗殴打架斗殴打架斗殴</text>
          </view>
          <text class="incident-id">事件ID: 20240917001</text>
        </view>
      </view>

      <view v-if="activeTab === 'resolved'" class="incidents">
        <view v-for="i in 2" :key="i" class="incident">
          <view class="incident-header">
            <text class="date">创建于:2024.07.20</text>
            <text class="status2">已结案</text>
          </view>
          <view class="incident-details">
            <view class="detail-item">
              <text class="detail-title">突发事件类型：</text>
              <text class="detail-subtitle">争吵</text>
            </view>
            <view class="detail-item">
              <text class="detail-title">是否报送心理健康中心：</text>
              <text class="detail-subtitle">是</text>
            </view>
            <view class="detail-item">
              <text class="detail-title">涉及学生人数：</text>
              <text class="detail-subtitle">2</text>
            </view>
          </view>
          <view class="incident-summary">
            <text class="summary-title">突发事件概述：</text>
            <text class="summary-content">争吵争吵争吵争吵争吵争吵争吵争吵争吵争吵</text>
          </view>
          <text class="incident-id">事件ID: 20240720001</text>
        </view>
	  </view>	
    </view>

      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        <button class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span class="text-blue-500 text-sm">事件报告</span>
        </button>
        <button class="flex flex-col items-center" @click="more">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="text-gray-400 text-sm">更多功能</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

.container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #3b82f6, #06b6d4);
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.time {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.status-icons {
  display: flex;
}

.status-dot {
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-left: 4px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
}

.incident-report {
  background-color: #f97316;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-text {
  display: flex;
  align-items: center;
}

.main-text {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

.sub-text {
  font-size: 14px;
  color: #ffffff;
}

.grid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.grid-item {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  width: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge {
  background-color: #f97316;
  color: #ffffff;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
}

.incident-list {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
}

.tabs {
  display: flex;
  margin-bottom: 16px;
}

.tab {
  flex: 1;
  text-align: center;
  padding-bottom: 8px;
}

.active {
  border-bottom: 2px solid #3b82f6;
  color: #3b82f6;
}

.incident {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 16px;
  margin-bottom: 16px;
}

.incident-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.date {
  color: #3b82f6;
}

.status {
  color: #f97316;
}

.status2 {
  color: #00ff00;
}

.incident-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.detail-item {
  flex: 1;
}

.detail-title {
  font-weight: bold;
}

.detail-subtitle {
  font-size: 12px;
  color: #6b7280;
}

.incident-summary {
  margin-bottom: 8px;
}

.summary-title {
  font-weight: bold;
}

.incident-id {
  font-size: 12px;
  color: #6b7280;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
}

.footer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>