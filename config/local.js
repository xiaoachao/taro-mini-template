const config = {
	env: {
		NODE_ENV: '"local"'
	},
	h5: {
		devServer: {
			port: '9001',
			proxy: {
				'/seal': {
					target: 'http://yourApiAdress',
					changeOrigin: true,
					ws: false,
					// pathRewrite: {
					// 	'^/api': ``,
					// },
				},
			},
		},
	},
}

module.exports = config
