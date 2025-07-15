import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://mfmiqenyivuigbzhcfow.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbWlxZW55aXZ1aWdiemhjZm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjIzMzUsImV4cCI6MjA2ODA5ODMzNX0.JMmH9gfbn2fa_wzz6__ky4OWhC9G59oYbBVYe0XzWnQ',
)
