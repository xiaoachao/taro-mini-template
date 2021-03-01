import BaseRequest from '~/utils/request'

interface Result {
	data: {
		SYS_NAME: string
		BOTTOM_LABEL: string
		SEAL_ACTIVE_ADDRESS: string
	}
}
/**
 * 相关服务
 */
class UserService extends BaseRequest {
	constructor() {
		super({})
	}

	/**
	 *
	 */
	queryDiseaseByDrugName(payload: { sceneKey: string }) {
		return this.post({
			url: '/yourApiAdress',
			data: {
				...payload,
			},
		}) as Promise<Result>
	}
}

export default new UserService()
