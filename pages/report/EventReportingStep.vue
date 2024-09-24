<template>
  <div class="event-reporting">
    <header class="header">
      <h1>事件上报</h1>
      <div class="more-options">
      </div>
    </header>

    <div class="progress-bar">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-label">第一步</div>
      </div>
      <div class="step-line"></div>
      <div class="step active">
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
      <h2>2.请选择对口心理中心教师(单选)</h2>
      <div class="staff-grid">
        <div v-for="staff in staffMembers" :key="staff.id" class="staff-item" @click="selectStaff(staff)">
          <div class="staff-avatar">{{ staff.initial }}</div>
          <div class="staff-name">{{ staff.name }}</div>
        </div>
      </div>

      <div class="selected-staff">
        <div v-for="staff in selectedStaffMembers" :key="staff.id" class="selected-staff-item">
          {{ staff.initial }}
        </div>
      </div>
      <div class="selected-staff-names">
        {{ selectedStaffNames }}
      </div>

      <h2>3.选定学生</h2>
      <div class="student-actions">
        <button class="primary-button"  :class="['tab', activeTab === 'unresolved' ? 'active' : '']" @click="activeTab = 'unresolved'">搜索学生选定</button>
        <button class="secondary-button"  :class="['tab', activeTab === 'resolved' ? 'active' : '']" @click="activeTab = 'resolved'">新增空白表单</button>
      </div>

    <view v-if="activeTab === 'unresolved'" class="incidents">
    <view v-for="i in 1" :key="i" class="incident">
      <div class="search-bar">
        <input type="text" placeholder="请输入姓名、学号查询" />
        <button class="search-button">🔍</button>
      </div>

      <h3>已添加学生</h3>
      <div class="student-list">
        <div v-for="student in addedStudents" :key="student.id" class="student-item">
          <div class="student-info">
            <div class="student-name">{{ student.name }}</div>
            <div class="student-id">{{ student.id }}</div>
          </div>
          <button class="remove-button" @click="removeStudent(student)">🗑️</button>
        </div>
      </div>

      <div v-if="selectedStudent" class="student-details">
        <div class="detail-row">
          <span class="detail-label">身份证号：</span>
          <span class="detail-value">{{ selectedStudent.idNumber }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">性别：</span>
          <span class="detail-value">{{ selectedStudent.gender }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">家庭住址：</span>
          <span class="detail-value">{{ selectedStudent.address }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">学院：</span>
          <span class="detail-value">{{ selectedStudent.college }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">专业班级：</span>
          <span class="detail-value">{{ selectedStudent.classInfo }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">寝室：</span>
          <span class="detail-value">{{ selectedStudent.dormitory }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">辅导员：</span>
          <span class="detail-value">{{ selectedStudent.counselor }}</span>
        </div>
      </div>
	  </view>
	  </view>

    <view v-if="activeTab === 'resolved'" class="incidents">
     <view v-for="i in 1" :key="i" class="incident">
      <div>
        <label for="studentType">请选择学生类型:</label>
        <select v-model="studentType" id="studentType">
          <option value="new">新</option>
          <option value="existing">已存在</option>
        </select>
      </div>

      <div>
        <label for="name">姓名:</label>
        <input type="text" v-model="student.name" id="name" placeholder="请输入姓名">
      </div>

      <div>
        <label for="idNumber">身份证号:</label>
        <input type="text" v-model="student.idNumber" id="idNumber" placeholder="请输入身份证号">
      </div>

      <div>
        <label for="gender">性别:</label>
        <select v-model="student.gender" id="gender">
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
      </div>

      <div>
        <label for="address">家庭住址:</label>
        <input type="text" v-model="student.address" id="address" placeholder="请输入详细地址">
      </div>

      <div>
        <label for="college">学院:</label>
        <input type="text" v-model="student.college" id="college" placeholder="请选择学院">
      </div>

      <div>
        <label for="major">专业:</label>
        <input type="text" v-model="student.major" id="major" placeholder="请选择专业">
      </div>

      <div>
        <label for="class">班级:</label>
        <input type="text" v-model="student.class" id="class" placeholder="请输入班级">
      </div>

      <div>
        <label for="dormitory">寝室:</label>
        <input type="text" v-model="student.dormitory" id="dormitory" placeholder="请输入寝室">
      </div>

      <div>
        <label for="counselor">辅导员:</label>
        <input type="text" v-model="student.counselor" id="counselor" placeholder="请输入辅导员">
      </div>

      <h3>已添加学生</h3>
      <div class="student-list">
        <div v-for="student in addedStudents" :key="student.id" class="student-item">
          <div class="student-info">
            <div class="student-name">{{ student.name }}</div>
            <div class="student-id">{{ student.id }}</div>
          </div>
          <button class="remove-button" @click="removeStudent(student)">🗑️</button>
        </div>
      </div>
	</view>
   </view>
	</div>

    <div class="bottom-buttons">
      <button class="primary-button" @click="step3">下一步</button>
      <button class="secondary-button" @click="step1">返回上一步</button>
      <button class="secondary-button" @click="draft">保存草稿</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ChevronLeft, MoreHorizontal } from 'lucide-vue-next'
// 定义响应式变量
const activeTab = ref('unresolved')

const staffMembers = [
  { id: 1, name: '邱秀英', initial: '邱' },
  { id: 2, name: '钟静', initial: '钟' },
  { id: 3, name: '赖娟', initial: '赖' },
  { id: 4, name: '叶军', initial: '叶' },
  { id: 5, name: '江洋', initial: '江' },
  { id: 6, name: '徐洋', initial: '徐' },
  { id: 7, name: '闵敏', initial: '闵' },
  { id: 8, name: '薛静', initial: '薛' },
  { id: 9, name: '郑霞', initial: '郑' },
  { id: 10, name: '郭秀兰', initial: '郭' },
  { id: 11, name: '熊明', initial: '熊' },
  { id: 12, name: '郭超', initial: '郭' },
];

const selectedStaffMembers = ref([]);
const addedStudents = ref([
  { id: '202009091104', name: '张晓波' },
  { id: '202009091104', name: '张晓波' },
  { id: '202009091104', name: '张晓波' },
]);

const selectedStudent = ref({
  idNumber: '510000000000000000',
  gender: '男',
  address: '某某省某某市某某区某某街道XXXX号',
  college: '某某学院',
  classInfo: 'A专业，A班级',
  dormitory: 'A园区，A栋，A单元，501',
  counselor: 'A辅导员',
});

const selectStaff = (staff) => {
  const index = selectedStaffMembers.value.findIndex(s => s.id === staff.id);
  if (index === -1) {
    selectedStaffMembers.value.push(staff);
  } else {
    selectedStaffMembers.value.splice(index, 1);
  }
};

const removeStudent = (student) => {
  const index = addedStudents.value.findIndex(s => s.id === student.id);
  if (index !== -1) {
    addedStudents.value.splice(index, 1);
  }
};

const selectedStaffNames = computed(() => {
  return selectedStaffMembers.value.map(staff => staff.name).join('、');
});

const formFields = [
  { name: 'name', label: '姓名:', type: 'text', placeholder: '请输入姓名' },
  { name: 'id', label: '身份证号:', type: 'text', placeholder: '请输入身份证号' },
  { name: 'gender', label: '性别:', type: 'select', placeholder: '请选择性别' },
  { name: 'residence', label: '家庭住址:', type: 'select', placeholder: '请选择所在区县' },
  { name: 'address', label: '', type: 'text', placeholder: '请输入详细地址' },
  { name: 'school', label: '学校:', type: 'select', placeholder: '请选择学校' },
  { name: 'major', label: '专业:', type: 'select', placeholder: '请选择专业' },
  { name: 'class', label: '班级:', type: 'text', placeholder: '请输入班级' },
  { name: 'counselor', label: '辅导员:', type: 'text', placeholder: '请输入辅导员姓名' },
]

const step1 = () => {
    uni.navigateTo({
        url: '/pages/report/EventReporting2'
    })
}

const step3 = () => {
    uni.navigateTo({
        url: '/pages/report/EventReportingStep3'
    })
}

const draft = () => {
    uni.navigateTo({
        url: '/pages/draft-box'
    })
}

    const selectedTeacher = ref('');
    const studentType = ref('');
    const student = ref({
      name: '',
      idNumber: '',
      gender: '',
      address: '',
      college: '',
      major: '',
      class: '',
      dormitory: '',
      counselor: ''
    });

    const submitForm = () => {
      console.log('Form submitted:', student.value);
    };

    const goBack = () => {
      console.log('Go back to previous step');
    };
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

.staff-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.staff-item {
  text-align: center;
  cursor: pointer;
}

.staff-avatar {
  width: 50px;
  height: 50px;
  background-color: #1890ff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0 auto 5px;
}

.staff-name {
  font-size: 12px;
}

.selected-staff {
  display: flex;
  margin-top: 20px;
}

.selected-staff-item {
  width: 30px;
  height: 30px;
  background-color: #1890ff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 5px;
}

.selected-staff-names {
  margin-top: 10px;
  font-size: 14px;
}

.student-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.primary-button, .secondary-button {
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.primary-button {
  color: white;
  border: none;
  color: #1890ff;
  border: 1px solid #1890ff;
}

.secondary-button {
  background-color: white;
  color: #1890ff;
  border: 1px solid #1890ff;
}

.search-bar {
  display: flex;
  margin-bottom: 15px;
}

.search-bar input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.search-button {
  padding: 10px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.student-list {
  margin-bottom: 20px;
}

.student-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.student-info {
  display: flex;
  flex-direction: column;
}

.student-name {
  font-weight: bold;
}

.student-id {
  font-size: 12px;
  color: #666;
}

.remove-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

.student-details {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
}

.detail-row {
  display: flex;
  margin-bottom: 10px;
}

.detail-label {
  font-weight: bold;
  margin-right: 10px;
}

.bottom-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.bottom-buttons button {
  width: 100%;
}

.report-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

label {
  display: block;
  margin: 10px 0 5px;
}

input, select {
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
</style>