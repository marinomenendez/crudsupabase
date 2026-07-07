import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({path: './.env'});

export const supabase = createClient( process.env.SUPABASE_URL, process.env.SUPABASE_KEY );
console.log(process.env.SUPABASE_URL);
console.log("conectado supabase");
//console.log(supabase);
