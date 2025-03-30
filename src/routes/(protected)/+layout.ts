import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
	data.data?.forEach((element) => {
		element.prova = "prova"
	})

	return {
		data: data
	}
};