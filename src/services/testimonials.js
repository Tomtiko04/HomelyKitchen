import supabase from "./supabase";


export async function testimonials() {
	let { data: testimonials, error } = await supabase.from("testimonials").select("*");
    
    if(error) throw new Error(error.message)
    
    return{testimonials, error}
}
