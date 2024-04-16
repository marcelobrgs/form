import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });

    /*
        
        onInputChange = cada vez que o input for alterado
    
        destructuring de target
        target é a referência ao objeto que enviou o evento
        quando quiser capturar o que foi digitado no campo input de um form,
        você utiliza event.target.value.
        captura o input do form, captura o que for digitado.
        observa no console a referência do objto que enviou o evento.
        event.target.value recupera o valor de entrada em que foi chamadao
        target refere-se ao emissor do evento.
        target é uma propriedade do objeto evento
        o objeto evento refere-se ao emissor do evento
    
        [name] é a propriedade name do emissor do evento (target)
        target é o input em que ocorre o evento de digitar
        targuet é o input em que está digitando, username, ou email, ou password
        propriedade name do input userName, input email, input password
        value: é o valor do emissor do evento, do target, do input
        value é o valor digitado   
    
    
        ...formState : spread operator, 
        cria uma cópia do estado atual de formState
    
    
    
    
        [name]:value : par chave valor (key-value)
        similar ao loop key-value, retorna o par chave-valor de cada elemnto do array
        [name] equivale à key 
        name é a propriedade name do input
        poderá ser: userName, email, password
        são aos chaves nome dos inputs de texto (propriedade name do input)
      
        [name] é dinâmico
        busca a propriedade name do input que está sendo alterado
        pode ser o input username, input email, input senha
    
        Em Javascript, quando você cria um objeto literal{}
        e você coloca a chave do objeto entre colchetes[key]
        você pode definir essa chave dinamicamente.
        
        value é o valor que está sendo digitado pelo usuário
        no campo do input, acrescido ao spread operator
        spread cria uma cópia do valor da variável formState
        adiciona o que for digitado no input username, ou email, ou senha
    
    
        
        */
    console.log(event.target.value);
    console.log(`${name} : ${value}`);
    //console.log(name, value);
    //console.log(formState.userName , formState.email , formState.password)
    //console.log(name, value, target.id, target.name, target.className);
  };

  return { 
    formState, 
    onInputChange };
};
