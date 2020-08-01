import { useState } from 'react';

export default function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
  
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      })
    }
  
    function handleChange(input) {
      setValue(
        input.target.getAttribute('name'),
        input.target.value
      );
    }
  
    function clearForm(){
      setValue(valoresIniciais);
    }
  
    return {
      values,
      handleChange,
      clearForm,
    };
  }