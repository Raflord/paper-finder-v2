import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rciwgsmivatqlvylivpp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaXdnc21pdmF0cWx2eWxpdnBwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1ODQ0ODkxMSwiZXhwIjoxOTc0MDI0OTExfQ.dbZPhTKL7cA278eSEKDSLW2vcpFL4F68PIYxTL7PPJs';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
