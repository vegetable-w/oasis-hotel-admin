import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gqfftbdkgskbzxtqlyoo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxZmZ0YmRrZ3NrYnp4dHFseW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MTc4NTcsImV4cCI6MjA0Njk5Mzg1N30.gslxbUqaARU13P2Ss_aC4EG6PcaEQjK4-mcsNC5McvM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
