import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
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

  if (req.method === 'POST') {
    fetch('https://rciwgsmivatqlvylivpp.supabase.co/rest/v1/papers', {
      body: req.body,
      headers: {
        Apikey: process.env.SUPABASE_KEY,
        Authorization: process.env.SUPABASE_AUTH_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      method: 'POST',
    });

    res.status(200).json({ status: 'Paper added successfully' });
  }

  if (req.method === 'DELETE') {
    const body = JSON.parse(req.body);
    fetch(
      `https://rciwgsmivatqlvylivpp.supabase.co/rest/v1/papers?id=eq.${body.id}`,
      {
        headers: {
          Apikey: process.env.SUPABASE_KEY,
          Authorization: process.env.SUPABASE_AUTH_KEY,
        },
        method: 'DELETE',
      }
    );

    res.status(200).json({ status: 'Paper deleted successfully' });
  }
}

export default handler;
