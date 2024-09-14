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
</script>

<template>
  <view class="container">
    <view class="header">
      <view class="status-icons">
      </view>
    </view>
    <text class="title">学生突发事件报告</text>
    <view class="incident-report">
      <view class="icon-text">
        <uni-icons type="upload" size="30" color="#ffffff"></uni-icons>
        <view>
          <text class="main-text" @click="report">事件上报</text>
          <text class="sub-text">INCIDENT REPORTING</text>
        </view>
      </view>
      <uni-icons type="more" size="24" color="#ffffff"></uni-icons>
    </view>

    <view class="grid">
      <view class="grid-item">
        <view class="icon-text">
          <uni-icons type="file-text" size="30" color="#3b82f6"></uni-icons>
          <view>
            <text class="main-text" @click="draft">草稿箱</text>
            <text class="sub-text">DRAFTS</text>
          </view>
        </view>
        <text class="badge">12</text>
      </view>
      <view class="grid-item">
        <view class="icon-text">
          <uni-icons type="clipboard" size="30" color="#06b6d4"></uni-icons>
          <view>
            <text class="main-text" @click="approval">立案审批</text>
            <text class="sub-text">FILING&APPROVAL</text>
          </view>
        </view>
        <text class="badge">3</text>
      </view>
    </view>

    <view class="incident-list">
      <view class="tabs">
        <text :class="['tab', activeTab === 'unresolved' ? 'active' : '']" @click="activeTab = 'unresolved'">未结案</text>
        <text :class="['tab', activeTab === 'resolved' ? 'active' : '']" @click="activeTab = 'resolved'">已结案</text>
      </view>

      <view v-if="activeTab === 'unresolved'" class="incidents">
        <view v-for="i in 2" :key="i" class="incident">
          <view class="incident-header">
            <text class="date">创建于:2023.03.20</text>
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
          <text class="incident-id">事件ID: 202303235456789</text>
        </view>
      </view>
    </view>

    <view class="footer">
      <view class="footer-item">
        <uni-icons type="lightning" size="24" color="#3b82f6"></uni-icons>
        <text>事件报告</text>
      </view>
      <view class="footer-item">
        <uni-icons type="more" size="24" color="#000000"></uni-icons>
        <text>更多功能</text>
      </view>
    </view>
  </view>
</template>

<style>
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