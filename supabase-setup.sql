-- Create the assessments table
CREATE TABLE IF NOT EXISTS assessments (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  location TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow insertions (for form submissions)
CREATE POLICY "Allow anonymous insertions" ON assessments
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to read all records
CREATE POLICY "Allow authenticated users to read" ON assessments
FOR SELECT 
TO authenticated
USING (true);
