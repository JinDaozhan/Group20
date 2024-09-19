<template>
	<view class="container">
	
		<view class="intro"></view>
		<text class="intro">更多内容：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<uni-row>
			<uni-col :span="12" :offset="6">
				<button @click="showMsg" type="primary">敬请期待</button>
			</uni-col>
		</uni-row>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let href = ref('https://www.coding6738.cn/')
	
	let showMsg = function(){
		uni.navigateTo({
			url: '/pages/home/index'
		})
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>