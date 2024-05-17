import supabase from "./supabase";

export async function dishes(page = 1) {
	let {
		data: dish,
		error,
		count,
	} = await supabase
		.from("dish")
		.select("*", { count: "exact" })
		.range(0, page * 6 - 1);

	if (error) throw new Error(error.message);

	return { dish, count };
}
