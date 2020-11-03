import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import './Categoria.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:3333/categorias';
    fetch(URL).then(async (response) => {
      const res = await response.json();
      setCategorias([
        ...res,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <div className="conteudo">
        <h1>Cadastro de Categoria</h1>

        <form onSubmit={function handleChange(input) {
          input.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          toast.success('Cadastro realizado com sucesso!');
          clearForm(valoresIniciais);
        }}
        >

          <FormField
            label="Nome da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button type="submit" color="--black" backgroundcolor="--buttonCadastro">
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

        <Button as={Link} to="/" color="--black" backgroundcolor="--linkHome">
          Ir para home
        </Button>
      </div>
    </PageDefault>
  );
}

export default CadastroCategoria;
