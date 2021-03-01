import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import Taro from '@tarojs/taro'
import { setEnv } from '~/utils/env'
import { stores, StoresContext } from './store'
import './app.scss'

class App extends Component {
	componentDidMount() { }

	componentDidShow() { }

	componentDidHide() { }

	onLaunch({query = {
		env: 'prod'
	}}) {
		const {env} = query
		setEnv(env)
		if (Taro.getEnv() === 'WEAPP') {
			// @ts-ignore
			wx.onUnhandledRejection(err => {
				this.handleError(err)
			})
			// @ts-ignore
			wx.onError(err => {
				this.handleError(err);
			})
		} else {
			// @ts-ignore
			my.onUnhandledRejection(err => {
				this.handleError(err)
			})
			// @ts-ignore
			my.onError(err => {
				this.handleError(err)
			})
		}
	}
	handleError(err) {
		console.log(err);
	}

	// this.props.children 就是要渲染的页面
	render() {
		return (
			<Provider store={stores}>
				<StoresContext.Provider value={stores}>
					{this.props.children}
				</StoresContext.Provider>
			</Provider>
		)
	}
}

export default App
