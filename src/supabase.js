import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vqfczcxcqbwgbwifuelb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZmN6Y3hjcWJ3Z2J3aWZ1ZWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NzQzMTcsImV4cCI6MjA1OTQ1MDMxN30.6Y7bxnc2lChTLkqWD9mKwHlztuFT-YyY4J-Pjs-iuKI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
