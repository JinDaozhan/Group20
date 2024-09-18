<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 p-4">
    <div class="max-w-md mx-auto">
      <header class="flex justify-between items-center mb-6">
        <div class="text-white text-2xl font-bold">9:41</div>
        <div class="flex space-x-1">
          <div class="w-4 h-4 bg-white rounded-full"></div>
          <div class="w-4 h-4 bg-white rounded-full"></div>
          <div class="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </header>
      
      <h1 class="text-white text-2xl font-bold mb-6">学生突发事件报告</h1>
      
      <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 mb-4 flex items-center">
        <div class="bg-white rounded-full p-2 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <div>
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
          <div>
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
          <div>
            <div class="text-gray-800 font-bold">立案审批</div>
            <div class="text-gray-600 text-sm">FILING&APPROVAL</div>
          </div>
          <div class="ml-auto bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</div>
        </div>
      </div>
      
      <div class="flex mb-4">
        <button class="flex-1 text-white font-bold pb-2 border-b-2 border-white">未结案</button>
        <button class="flex-1 text-blue-200 font-bold pb-2">已结案</button>
      </div>
      
      <div class="bg-white rounded-lg p-4 mb-4">
        <div class="flex justify-between items-center mb-2">
          <div class="text-blue-600 font-bold">创建于:2023.03.20</div>
          <div class="text-orange-500 font-bold">未结案</div>
        </div>
        <div class="grid grid-cols-3 gap-2 mb-2">
          <div class="text-gray-600">打架斗殴</div>
          <div class="text-gray-600">是</div>
          <div class="text-gray-600">9</div>
          <div class="text-gray-500 text-sm">突发事件类型</div>
          <div class="text-gray-500 text-sm">是否报送心理健康中心</div>
          <div class="text-gray-500 text-sm">涉及学生人数</div>
        </div>
        <div class="mb-2">
          <div class="text-gray-500 text-sm">突发事件概述:</div>
          <div class="text-gray-600">打架斗殴打架斗殴打架斗殴打架斗殴打架斗殴</div>
        </div>
        <div class="text-gray-500 text-sm">事件ID: 202303235456789</div>
      </div>
      
      <div class="bg-white rounded-lg p-4">
        <div class="flex justify-between items-center mb-2">
          <div class="text-blue-600 font-bold">创建于:2023.03.20</div>
          <div class="text-orange-500 font-bold">未结案</div>
        </div>
        <div class="grid grid-cols-3 gap-2 mb-2">
          <div class="text-gray-600">打架斗殴</div>
          <div class="text-gray-600">是</div>
          <div class="text-gray-600">9</div>
          <div class="text-gray-500 text-sm">突发事件类型</div>
          <div class="text-gray-500 text-sm">是否报送心理健康中心</div>
          <div class="text-gray-500 text-sm">涉及学生人数</div>
        </div>
        <div class="mb-2">
          <div class="text-gray-500 text-sm">突发事件概述:</div>
          <div class="text-gray-600">打架斗殴打架斗殴打架斗殴打架斗殴打架斗殴</div>
        </div>
        <div class="text-gray-500 text-sm">事件ID: 202303235456789</div>
      </div>
      
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        <button class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span class="text-blue-500 text-sm">事件报告</span>
        </button>
        <button class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="text-gray-400 text-sm">更多功能</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>