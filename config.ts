export const config = {
	http: {
		port: 8000,
	},

	db: {
		pathname: 'shared',
	},
}

export type Config = typeof config;
