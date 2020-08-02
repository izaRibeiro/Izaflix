import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIAS}?_embed=videos`)
       .then(async (response) => {
        if(response.ok){
            const res = await response.json();
            return res;
        }

       throw new Error('Ops .. houve um erro na conexão');
    });
}

export default {
    getAllWithVideos,
};