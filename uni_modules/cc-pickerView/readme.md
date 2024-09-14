# cc-pickerView 

 
### 我的技术微信公众号

![图片](https://i.postimg.cc/RZ0sjnYP/front-End-Component.jpg)


#### 使用方法 
```使用方法
	
<!-- leftTitle:左边标题 name： 输入框名称  placeholder: 占位符 @change: 选择事件  value：选择值  range：选择范围  -->
<cc-pickerView leftTitle="房屋朝向" name="orientations" placeholder="请选择房屋朝向" @change="towardPickerChange"
				:value="towardIndex" :range="towardArr"></cc-pickerView>

<cc-pickerView leftTitle="房屋楼层" name="layer" placeholder="请选择房屋朝向" @change="floorPickerChange"
				:value="floorIndex" :range="floorArr"></cc-pickerView>

<cc-pickerView leftTitle="房屋电梯" name="lift" placeholder="请选择房屋电梯" @change="liftPickerChange"
				:value="liftIndex" :range="liftArr"></cc-pickerView>

<cc-pickerView leftTitle="房屋装修" name="decorate" placeholder="请选择房屋装修" @change="decoratePickerChange"
				:value="decorateIndex" :range="decorateArr"></cc-pickerView>


```

#### HTML代码实现部分
```html
<template>
	<view class="content">

		<form @submit="formSubmit" @reset="formReset">

			<!-- leftTitle:左边标题 name： 输入框名称  placeholder: 占位符 @change: 选择事件  value：选择值  range：选择范围  -->
			<cc-pickerView leftTitle="房屋朝向" name="orientations" placeholder="请选择房屋朝向" @change="towardPickerChange"
				:value="towardIndex" :range="towardArr"></cc-pickerView>

			<cc-pickerView leftTitle="房屋楼层" name="layer" placeholder="请选择房屋朝向" @change="floorPickerChange"
				:value="floorIndex" :range="floorArr"></cc-pickerView>

			<cc-pickerView leftTitle="房屋电梯" name="lift" placeholder="请选择房屋电梯" @change="liftPickerChange"
				:value="liftIndex" :range="liftArr"></cc-pickerView>

			<cc-pickerView leftTitle="房屋装修" name="decorate" placeholder="请选择房屋装修" @change="decoratePickerChange"
				:value="decorateIndex" :range="decorateArr"></cc-pickerView>





			<view class="uni-btn-v">
				<button class="botBtn" type="primary" form-type="submit">下一步</button>
				<view class="tipText"> 注意事项: 请确保您填写的房屋信息真实无误 </view>

			</view>
		</form>


	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {

				towardIndex: -1,
				floorIndex: -1,
				liftIndex: -1,
				decorateIndex: -1,



				towardArr: ['东', '南', '西', '北', '南北'],
				floorArr: ['低', '中', '高'],
				liftArr: ['有电梯', '无电梯'],
				decorateArr: ['普通装修', '精装修'],
			}
		},

		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e));
				var formdata = e.detail.value;
				uni.showModal({
					title: '温馨提示',
					content: 'formsubmit事件携带数据为：' + JSON.stringify(e.detail.value)
				})

			},
			towardPickerChange: function(e) {
				this.towardIndex = e.target.value;
				console.log(e.target.value);
			},
			floorPickerChange: function(e) {
				this.floorIndex = e.target.value;
				console.log(e.target.value);
			},
			liftPickerChange: function(e) {
				this.liftIndex = e.target.value;
				console.log(e.target.value);
			},
			decoratePickerChange: function(e) {
				this.decorateIndex = e.target.value;
				console.log(e.target.value);
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.uni-btn-v {
		width: 100%;
		height: auto;
	}

	.botBtn {
		width: 90%;
		margin-top: 36px;
	}

	.tipText {
		width: 100%;
		margin-left: 0px;
		text-align: center;
		color: #666666;
		margin-top: 36px;
		margin-bottom: 36px;
		font-size: 28rpx;
	}
</style>



```
