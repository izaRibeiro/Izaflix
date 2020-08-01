import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videoRepository from '../../../repository/videos';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, SetCategorias] = useState([])
    const { handleChange, values} = useForm({
        titulo: '',
        url: '',
        categoria: ''
    });

    return (
        <PageDefault>
            <div className="conteudo">
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={event => {
                event.preventDefault();
                
                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                }); 

                videoRepository.create({
                    titulo: '',
                    url: values.url,
                    categoriaId: 1,
                }).then(() => {
                    console.log('Cadastro realizadoo com sucesso!')
                    history.push('/');
                });
               
            }}>
                <FormField
                    label="Título"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="Url"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label="Categoria"
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>
            <Button as={Link} to="/cadastro/categoria">
                Cadastrar Categoria
            </Button>
            </div>
        </PageDefault>
    )
}

export default CadastroVideo;