import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useStores } from '~/store'
import toast from '~/utils/toast'
import UserService from '~/services/user/user.service'
import './index.scss'

function User() {
	const [localName, setName] = useState('taro')
	const { user: userStore } = useStores()

	function addNumber() {
		userStore.addCounter()
	}

	function changeName() {
		setName(`localName${Math.floor(Math.random() * 100)}`)
	}

	useEffect(() => {
		console.log('进入页面')
		setTimeout(async () => {
			const res = await UserService.queryDiseaseByDrugName({
				sceneKey: 'MINI_PROGRAM_ALIPAY',
			})
			userStore.setUserName(res.data.SYS_NAME)
		}, 2000)
	}, [])

	useEffect(() => {
		console.log('localName 发生改变', localName)
	}, [localName])

	return (
		<View className='index'>
			<Button onClick={() => addNumber()}>Click!</Button>
			<Button onClick={() => changeName()}>Click!</Button>
			<Text className='text'>this is localName {localName}</Text>
			<Text className='text'>this is storeName {userStore.username}</Text>
			<Text className='text'>cueNumber {userStore.counter}</Text>
		</View>
	)
}

export default observer(User)
