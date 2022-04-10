import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_API_URL
const supabaseKey = process.env.NEXT_PUBLIC_API_KEY
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing supabase url or key')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
