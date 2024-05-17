import supabase from "./supabase";

export async function signup({userName, email, password}){
    
const { data, error } = await supabase.auth.signUp({
	email,
	password,
	options: {
		data: {
			userName,
		},
	},
});

if(error) throw new Error(error.message)

console.log(data);
return data;
}

export async function login({email, password}){
    
const { data, error } = await supabase.auth.signInWithPassword({
	email,
	password,
});
if(error) throw new Error(error.message);

return data;

}

