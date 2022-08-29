import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';

interface Paper {
  id: number;
  created_at: string;
  name: string;
  magazine: string;
  position: number;
  side: string;
}

const PaperList = () => {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [search, setSearch] = useState('');

  const removeRow = (paperId: number) => {
    const indexToRemove = papers.findIndex((e) => e.id === paperId);
    setPapers(papers.slice(indexToRemove, 0));

    const removeFromDb = async (paperId: number) => {
      const { data, error } = await supabase
        .from('papers')
        .delete()
        .eq('id', paperId);
    };
    removeFromDb(paperId);
  };

  useEffect(() => {
    fetch('/api/papers')
      .then((response) => response.json())
      .then((data) => setPapers(data));
  }, [papers.length]);

  const filteredPapers =
    search.length > 0
      ? papers.filter((paper) => paper.name.includes(search))
      : [];

  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="Qual papel está procurando?"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="w-full p-2 mb-3"
        ></input>
        <table className="w-full text-left capitalize text-lg">
          <thead>
            <tr>
              <th>ID - Nome</th>
              <th>Posição</th>
              <th>Lado</th>
            </tr>
          </thead>
          <tbody>
            {search.length > 0
              ? filteredPapers.map((paper) => {
                  return (
                    <tr key={'id' + paper.id}>
                      <td key={'name' + paper.created_at}>
                        {paper.id} - {paper.name}
                      </td>
                      <td key={'position' + paper.created_at}>
                        {paper.magazine}
                        {paper.position}
                      </td>
                      <td key={'side' + paper.created_at}>{paper.side}</td>
                      <td key={'button' + paper.created_at}>
                        <button
                          onClick={() => removeRow(paper.id)}
                          className="border border-black px-1 rounded-md bg-gray-200 text-sm"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  );
                })
              : papers.map((paper) => {
                  return (
                    <tr key={'id' + paper.id}>
                      <td key={'name' + paper.created_at}>
                        {paper.id} - {paper.name}
                      </td>
                      <td key={'position' + paper.created_at}>
                        {paper.magazine}
                        {paper.position}
                      </td>
                      <td key={'side' + paper.created_at}>{paper.side}</td>
                      <td key={'button' + paper.created_at}>
                        <button
                          onClick={() => removeRow(paper.id)}
                          className="border border-black px-1 rounded-md bg-gray-200 text-sm"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaperList;
