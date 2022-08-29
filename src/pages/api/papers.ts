import type { NextApiRequest, NextApiResponse } from 'next';

interface Paper {
  id: number;
  created_at: string;
  name: string;
  magazine: string;
  position: number;
  side: string;
}

async function fetchPapers(req: NextApiRequest, res: NextApiResponse<Paper>) {
  const supabaseKey = process.env.SUPABASE_KEY || '';
  const supabaseAuth = process.env.SUPABASE_AUTH_KEY || '';

  const papersRes = await fetch(
    'https://rciwgsmivatqlvylivpp.supabase.co/rest/v1/papers?select=*',
    {
      headers: {
        Apikey: supabaseKey,
        Authorization: supabaseAuth,
      },
    }
  );
  const papersResJson = await papersRes.json();

  res.status(200).json(papersResJson);
}

export default fetchPapers;
