import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPaper } from '../../../types/IPaper';
import { definitions } from '../../../types/supabase';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const data = await supabase
      .from<definitions['papers']>('papers')
      .select('*');

    if (data.error) {
      res.status(data.status).json(data.error);
    }
    res.status(data.status).json(data.data);
  }

  if (req.method === 'POST') {
    const body: IPaper = JSON.parse(req.body);

    const data = await supabase.from<definitions['papers']>('papers').insert([
      {
        name: body.name,
        magazine: body.magazine,
        position: body.position,
        side: body.side,
      },
    ]);

    if (data.error) {
      res.status(data.status).json(data.error);
    }

    res.status(data.status).json(data.statusText);
  }

  if (req.method === 'DELETE') {
    const body: IPaper = JSON.parse(req.body);

    const data = await supabase
      .from<definitions['papers']>('papers')
      .delete()
      .eq('id', body.id);

    if (data.error) {
      res.status(data.status).json(data.error);
    }

    res.status(data.status).json(data.statusText);
  }
}

export default handler;
