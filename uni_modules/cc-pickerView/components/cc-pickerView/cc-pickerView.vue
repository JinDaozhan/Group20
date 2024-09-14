<template>
	<view>
		<view class="inputView">
			<uni-row>
				<uni-col :span="8">
					<text class="leftTitle"><text class="msg">*</text>{{leftTitle}}</text>
				</uni-col>
				<uni-col :span="12">
					<picker class="picker" @change="changeClick" :value="value" :range="range">

					</picker>
				</uni-col>
				<uni-col :span="2">
					<input class="rightInput" :name="name" v-model="range[value]" :placeholder="placeholder"
						disabled="true" />
				</uni-col>
				<uni-col :span="2">
					<image class="arrowImg0" mode="aspectFit" src="./arrow_right.png"></image>
				</uni-col>
			</uni-row>



		</view>
		<view class="lineV"></view>

	</view>
</template>

<script>
	export default {
		name: "ccPickerView",
		props: {
			// 左边标题栏
			leftTitle: {
				type: String,
				default: ""
			},
			// 默认输入占位符
			placeholder: {
				type: String,
				default: ""
			},
			// 输入框name
			name: {
				type: String,
				default: ""
			},
			// 当前index
			value: {
				type: [Number, String],
				default: 0
			},
			// 数据源
			range: {
				type: Array,
				default () {

					return [];
				}
			}

		},
		data() {
			return {

			}
		},
		methods: {

			changeClick(e) {


				this.$emit("change", e);

			},
		}

	}
</script>

<style>
	.inputView {
		flex-direction: row;
		display: flex;
		align-items: center;
		width: 100%;
	}



	.msg {
		color: #ff0000;
		font-size: 14px;
		font-face: PingFang SC;
		font-weight: 400;
		letter-spacing: 0;

	}

	.leftTitle {
		width: 100%;
		color: #1a1a1a;
		font-size: 14px;
		font-face: PingFang SC;
		font-weight: 400;
		letter-spacing: 0;
	}

	.picker {
		margin-left: 0px;
		width: 100%;
		height: 100rpx;
		font-size: 30rpx;
	}


	.rightInput {
		width: calc(100vw - 120px);
		font-size: 30rpx;
		/* height: 50px; */
	}


	.arrowImg0 {
		margin-right: 22px;
		margin-top: 10rpx;
		width: 30rpx;
		height: 30rpx;
	}

	.line {
		width: 90%;
		height: 2rpx;
		margin-left: -2rpx;
		background-color: #f8f8f8;
		margin-left: 5%;

	}
</style>