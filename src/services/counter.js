import supabase from "./supabase";

export async function counter(){
    
let { data, error } = await supabase
  .from('counter')
  .select('*')

  if(error) throw new Error(error.message);

  return data;

}