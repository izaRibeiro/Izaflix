import config from '../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIAS}`)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
       .then(async (response) => {
        if(response.ok){
            const res = await response.json();
            return res;
        }

      toast.error('Ops .. houve um erro na conexão')
      throw new Error('Ops .. houve um erro na conexão');
    });
}

export default {
    getAllWithVideos,
    getAll
};