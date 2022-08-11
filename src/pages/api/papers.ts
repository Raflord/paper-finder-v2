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
  const papersRes = await fetch(
    'https://rciwgsmivatqlvylivpp.supabase.co/rest/v1/papers?select=*',
    {
      headers: {
        Apikey: process.env.SUPABASE_KEY,
        Authorization: process.env.SUPABASE_AUTH_KEY,
      },
    }
  );
  const papersResJson = await papersRes.json();

  res.status(200).json(papersResJson);
}

export default fetchPapers;
