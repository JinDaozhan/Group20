<template>
	<view class="content">
		<view class="head">
			<view class="logo">
				logo
			</view>
			<text class="tip">欢迎登录学生突发事件管理系统</text>
		</view>
		<view class="form-box">
			<view class="tab-box">
				<view class="row-tab" @click="tabClick(0)">
					<text :class="tabIndex==0?'tab-active':''">账号登录</text>
					<text class="thing" v-show="tabIndex==0?true:false"></text>
				</view>
				<view class="row-tab" @click="tabClick(1)">
					<text :class="tabIndex==1?'tab-active':''">验证码登录</text>
					<text class="thing" v-show="tabIndex==1?true:false"></text>
				</view>
			</view>
			<view v-show="tabIndex==0">
				<view class="row-input">
					<input maxlength="11" placeholder="手机号码" />
				</view>
				<view class="row-input">
					<input password maxlength="18" placeholder="密码" />
				</view>
			</view>
			<view v-show="tabIndex==1">
				<view class="row-input">
					<input maxlength="11" placeholder="手机号码" />
					<view class="code">
						<text @click="getCode">获取验证码</text>
					</view>
				</view>
				<view class="row-input">
					<input maxlength="6" placeholder="验证码" />
				</view>
			</view>
			<view class="login-btn">
				<text @click="login">登录</text>
			</view>
			<view class="menu-link">
				<text @click="register">注册</text>
				<text>找回密码</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0, //tab下标
			}
		},
		methods: {
			// tab点击
			tabClick(id) {
				this.tabIndex = id
			},

			// 获取验证码
			getCode() {
				uni.showToast({
					title: "获取验证码"
				})
			},

			// 注册
			register() {
				uni.navigateTo({
					url: '/pages/login/zhuce'
				})
			},
			
			//登录
			login() {
				uni.navigateTo({
					url: '/pages/home/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #007AFF;
	}

	.head {
		padding-left: 80rpx;
		height: 30vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 8rpx;
			width: 110rpx;
			height: 110rpx;
			font-size: 40rpx;
			color: #007AFF;
			font-weight: bold;
			background-color: #FFFFFF;
		}

		.tip {
			padding-top: 50rpx;
			color: #FFFFFF;
			font-size: 40rpx;
			letter-spacing: 5rpx;
			font-weight: bold;
		}
	}

	.form-box {
		padding: 0rpx 80rpx;
		height: 70vh;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-color: #FFFFFF;

		.tab-box {
			padding-top: 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 80rpx;
			color: #929293;
			font-weight: bold;

			.row-tab {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				font-weight: bold;
				font-size: 35rpx;
				width: 50%;
				height: 100%;

				.tab-active {
					color: #4d88f8;
				}

				.thing {
					margin-top: 20rpx;
					width: 50rpx;
					height: 6rpx;
					background-color: #3884f6;
				}
			}
		}
		
		.row-input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-top: 50rpx;
			font-size: 30rp;
			height: 100rpx;
			border-bottom: 1rpx solid #cfcfd0;

			input {
				flex: 1;
			}

			.code {
				display: flex;
				justify-content: flex-end;
				font-weight: bold;
				color: #0b77f7;
				width: 200rpx;
				font-size: 26rpx;
			}
		}

		.login-btn {
			margin-top: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100rpx;
			letter-spacing: 10rpx;
			background: linear-gradient(to right, #0a7df7, #0f62f3);
			color: #FFFFFF;
			border-radius: 10rpx;
			font-size: 30rpx;
		}

		.menu-link {
			position: fixed;
			left: 80rpx;
			right: 80rpx;
			bottom: 50rpx;
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: bold;
		}
	}
</style>