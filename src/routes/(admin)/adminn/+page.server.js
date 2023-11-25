import { SECRET_PASSWORD_ADMIN } from '$env/static/private';

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
        const formData = new Map(data.entries());
        const password = formData.get('password');

        if (password === SECRET_PASSWORD_ADMIN) {
            cookies.set('connect', 'true', { path: '/' });
        } else {
        }
	},
	logout: async ({ cookies, request }) => {
        if (cookies.get('connect')) {
            cookies.set('connect', 'false', { path: '/' });
        }
	},

};


