/**
 * 请求基类
 */

import Taro from '@tarojs/taro'
import Constants from '~/constants/index'
import { SUCC_LIST } from '~/constants/code'
import urlInterceptor from '~/interceptors/url.interceptor'
import headerInterceptor from '~/interceptors/header.interceptor'
import paramInterceptor from '~/interceptors/param.interceptor'
import dataInterceptor from '~/interceptors/data.interceptor'
import delInterceptor from '~/interceptors/del.interceptor'
import { getEnv, baseApiConfig } from '~/utils/env'
import toast from '~/utils/toast'

// 添加拦截器
const getInterceptors = () => {
	return [
		urlInterceptor,
		headerInterceptor,
		paramInterceptor,
		// delInterceptor,
		dataInterceptor,
		Taro.interceptors.logInterceptor,
		Taro.interceptors.timeoutInterceptor,
	]
}
getInterceptors().forEach(interceptorItem =>
	Taro.addInterceptor(interceptorItem)
)

interface IOptions {
	hostKey: string
	[key: string]: any
}

interface IRequestConfig {
	url: string
	data?: any
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'UPLOAD'
	[key: string]: any
}

class BaseRequest {
	public options: IOptions

	constructor(options) {
		this.options = options
	}

	public async request({
		url,
		data,
		method,
		header = {
			'Content-Type': 'application/json',
		},
		dataType = 'json',
		responseType = 'text',
		showToast = true,
		jsonp = false,
		crossHeaderInterceptor = false,
		resType = 0,
	}: IRequestConfig) {
		const baseUrl = baseApiConfig[getEnv()].API_URL
		header[Constants.INTERCEPTOR_HEADER] = {
			baseUrl,
			showToast,
			resType,
			crossHeaderInterceptor,
		}

		// UPLOAD方法特殊处理
		if (method === 'UPLOAD') {
			return new Promise((resolve, reject) => {
				return Taro.uploadFile({
					url: `${baseUrl}/${url}`,
					filePath: data,
					name: 'file',
					success(res) {
						const resultData = res.data

						console.log('uploadFile success', resultData)
						console.log('uploadFile success', JSON.parse(resultData))
						const result = JSON.parse(resultData)
						if (SUCC_LIST.includes(result.code)) {
							resolve(result)
						} else {
							toast.info(result.msg)
							reject(result)
						}
					},
					fail(err) {
						console.log('uploadFile err', err)
						reject(err)
					},
				})
			})
		} else {
			return Taro.request({
				url,
				data,
				method,
				header,
				dataType,
				responseType,
				jsonp,
			})
		}
	}

	public get(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
		resType?: 1 | 0
		crossHeaderInterceptor?: boolean
	}) {
		return this.request({
			method: 'GET',
			...payload,
		})
	}

	public post(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
		resType?: 1 | 0
		crossHeaderInterceptor?: boolean
	}) {
		return this.request({
			method: 'POST',
			...payload,
		})
	}

	public put(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
		resType?: 1 | 0
		crossHeaderInterceptor?: boolean
	}) {
		return this.request({
			method: 'PUT',
			...payload,
		})
	}

	public delete(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
		resType?: 1 | 0
		crossHeaderInterceptor?: boolean
	}) {
		return this.request({
			method: 'DELETE',
			...payload,
		})
	}

	public jsonp(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
		resType?: 1 | 0
		crossHeaderInterceptor?: boolean
	}) {
		return this.request({
			method: 'GET',
			jsonp: true,
			...payload,
		})
	}

	/**
	 * 上传文件
	 */
	public upload(payload: {
		url: string
		data: any
		showToast?: boolean
		header?: any
		resType?: 1 | 0
		crossHeaderInterceptor?: boolean
	}) {
		return this.request({
			...payload,
			method: 'UPLOAD',
			header: {
				'Content-Type': 'multipart/form-data',
			},
		})
	}
}

export default BaseRequest
