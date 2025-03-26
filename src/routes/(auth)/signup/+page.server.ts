import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;

		if (name.length > 20) return fail(400, { message: 'Name is too long' });

		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const {
			data: { user },
			error
		} = await supabase.auth.signUp({
			email: email,
			password: password
		});

		if (error) return fail(400, { message: error.message });

		if (user) {
			const { error } = await supabase.from('profiles').update({ name: name }).eq('id', user.id);

			if (!error) {
				throw redirect(303, '/dashboard');
			}
		}
	}
};
