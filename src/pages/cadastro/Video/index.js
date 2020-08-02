import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videoRepository from '../../../repository/videos';
import categoriasRepository from '../../../repository/categorias';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([])
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChange, values} = useForm({
        titulo: '',
        url: '',
        categoria: ''
    });

    useEffect(() => {
        categoriasRepository
          .getAll()
          .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
          });
      }, []);

    return (
        <PageDefault>
            <div className="conteudo">
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={event => {
                event.preventDefault();
                
                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                }); 
                
                if(categoriaEscolhida){
                    videoRepository.create({
                        titulo: '',
                        url: values.url,
                        categoriaId: categoriaEscolhida.id,
                    }).then(() => {
                        toast.success('Cadastro realizado com sucesso!')
                        history.push('/');
                    });
                }else{
                    toast.error('Não foi possivel encontrar a cetegoria solicitada')
                }
               
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

                <Button color="--black" backgroundcolor="--buttonCadastro" margin="10px">
                    Cadastrar
                </Button>
            </form>
            <Button as={Link} to="/cadastro/categoria" color="--black" backgroundcolor="--linkCadastroCategoria">
                Cadastrar Categoria
            </Button>
            </div>
        </PageDefault>
    )
}

export default CadastroVideo;