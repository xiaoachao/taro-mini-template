let env = 'prod'

/**
 * 获取环境变量
 */
export function getEnv() {
	return env || 'prod'
}

/**
 * 设置环境变量
 * @param {String} envVal 环境变量值
 */
export function setEnv(envVal = 'prod') {
	env = envVal || 'prod'
}

/**
 * 项目环境配置列表
 */
export const baseApiConfig = {
	project: {
		API_URL: 'http://yourApiAdress',
	},
	test: {
		API_URL: 'http://yourApiAdress',
	},
	sml: {
		API_URL: 'http://yourApiAdress',
	},
	prod: {
		API_URL: 'https://yourApiAdress',
	},
}
