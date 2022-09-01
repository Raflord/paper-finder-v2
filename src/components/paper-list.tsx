import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { IPaper } from '../../types/IPaper';
import { queryClient } from './../pages/index';

const fetchPapers = async () => {
  const res = await fetch('/api/papers', {
    method: 'GET',
  });

  if (res.ok) {
    return res.json();
  }

  throw new Error(res.statusText);
};

const PaperList = () => {
  const [search, setSearch] = useState('');

  // query to fetch the paper list from supabase
  const { data, isLoading, isError, error } = useQuery<IPaper[], Error>(
    ['papers'],
    fetchPapers
  );

  // mutation hook to remove a paper form supabase
  const { mutate } = useMutation(
    async (id: number) =>
      await fetch('/api/papers', {
        method: 'DELETE',
        body: JSON.stringify({ id: id }),
      }),
    {
      onSuccess: () => {
        alert('Papel removido com sucesso.');
        queryClient.invalidateQueries(['papers']);
      },
      onError: () => {
        alert('Erro ao remover o papel!\nTente novamente.');
      },
    }
  );

  // filters papers list
  const filteredPapers =
    search.length > 0
      ? data?.filter((paper) => paper.name.includes(search))
      : [];

  if (isLoading) {
    return <span>Buscando lista de papéis no servidor...</span>;
  }

  if (isError) {
    return (
      <span>
        Erro ao buscar lista de papéis no servidor! <br />
        Error message: {error.message}
      </span>
    );
  }

  return (
    <>
      <div>
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
              ? filteredPapers?.map((paper) => {
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
                          onClick={() => {
                            mutate(paper.id);
                          }}
                          className="border border-black px-1 rounded-md bg-gray-200 text-sm"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  );
                })
              : data?.map((paper) => {
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
                          onClick={() => {
                            mutate(paper.id);
                          }}
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
