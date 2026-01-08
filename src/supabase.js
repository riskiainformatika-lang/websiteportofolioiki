import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xareppokoyyqdcuyrhrf.supabase.co';
const supabaseKey = 'sb_publishable_p2tmY1m3BXwSKn74lg4geg_YLCVoN7_';

export const supabase = createClient(supabaseUrl, supabaseKey);