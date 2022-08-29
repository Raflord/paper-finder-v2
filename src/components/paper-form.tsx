import { useState } from 'react';
import supabase from '../utils/supabaseClient';

export default function Form() {
  const [material, setMaterial] = useState('');
  const [magazine, setMagazine] = useState('');
  const [position, setPosition] = useState('');
  const [paperSide, setPaperSide] = useState('superior');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (material === '' || magazine === '' || position === '') {
      return alert('Preencha todos os campos');
    }

    const insertRow = async () => {
      const { data, error } = await supabase.from('papers').insert([
        {
          name: material,
          magazine: magazine,
          position: position,
          side: paperSide,
        },
      ]);
    };
    insertRow();

    setMaterial('');
    setMagazine('');
    setPosition('');
    setPaperSide('superior');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="material-description" className="mb-2">
          Descrição do material
        </label>
        <select
          name="material-description"
          className="mb-3"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <option value="">Nome</option>
          <option value="branco">Branco</option>
          <option value="carvalho">Carvalho</option>
          <option value="carvalho americano">Carvalho Americano</option>
          <option value="concreto">Concreto</option>
          <option value="concreto metropolitan">Concreto Metropolitan</option>
          <option value="cumaru">Cumaru</option>
          <option value="grafito">Grafito</option>
          <option value="lotus">Lotus</option>
          <option value="nimbus">Nimbus</option>
          <option value="ônix">Ônix</option>
          <option value="preto">Preto</option>
        </select>
        <label htmlFor="position" className="mb-2">
          Posição do material
        </label>
        <select
          name="position"
          className="mr-4 mb-3"
          value={magazine}
          onChange={(e) => setMagazine(e.target.value)}
        >
          <option value="">Magazine</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
          <option value="e">E</option>
          <option value="f">F</option>
          <option value="g">G</option>
          <option value="h">H</option>
          <option value="i">I</option>
          <option value="j">J</option>
          <option value="k">K</option>
          <option value="l">L</option>
          <option value="m">M</option>
          <option value="n">N</option>
          <option value="o">O</option>
          <option value="p">P</option>
          <option value="q">Q</option>
          <option value="r">R</option>
          <option value="s">S</option>
          <option value="t">T</option>
          <option value="u">U</option>
          <option value="v">V</option>
          <option value="w">W</option>
          <option value="x">X</option>
          <option value="y">Y</option>
          <option value="z">Z</option>
        </select>
        <select
          name="position"
          className="mb-3"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="">Posição</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <fieldset className="mb-3">
          <legend className="mb-2">Qual é o lado do material?</legend>
          <label className="mb-1">
            <input
              type="radio"
              value="superior"
              name="paper-side"
              className="mr-2"
              checked={paperSide === 'superior'}
              onChange={(e) => {
                setPaperSide(e.target.value);
              }}
            />
            Superior
          </label>
          <label className="">
            <input
              type="radio"
              value="inferior"
              name="paper-side"
              className="mr-2"
              checked={paperSide === 'inferior'}
              onChange={(e) => {
                setPaperSide(e.target.value);
              }}
            />
            Inferior
          </label>
        </fieldset>
        <button
          type="submit"
          className="bg-sky-500 text-xl text-white p-3 rounded-lg w-1/2 font-semibold hover:scale-105 transition duration-100 ease-in mb-5"
        >
          Novo Item
        </button>
      </form>
    </>
  );
}
