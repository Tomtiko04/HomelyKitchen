import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zcetmfieqrivijjfpgsk.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZXRtZmllcXJpdmlqamZwZ3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNzg3NjAsImV4cCI6MjAyODc1NDc2MH0.S-Ish64U5auBeiyz-XE-zx3k4_x9bN3utG9pjhbT2XY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;