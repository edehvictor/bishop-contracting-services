import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://glssbqdtwktscjsaripf.supabase.co";
const SupabaseAnonKey: string =
  import.meta.env.VITE_PUBLIC_SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdsc3NicWR0d2t0c2Nqc2FyaXBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NzA4MTksImV4cCI6MjA2NzU0NjgxOX0.ySvS4x48tLcVwRwgKBGZt2uh9r_veXKFwx6td1dmnZE";

const supabase: SupabaseClient = createClient(supabaseUrl, SupabaseAnonKey);

export default supabase;
