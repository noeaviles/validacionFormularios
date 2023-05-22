import React,{useState} from 'react'
import { helpHttp } from './helpers/helpHttp';


export const useForm = (initialForm,validateForm) => {
    const [form, setform] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setform({
            ...form, [name]:value
        });
    };

    const handleBlur = (e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario");
            setLoading(true);
            helpHttp()
                .post("https://formsubmit.co/ajax/noe.alexander.aviles@gmail.com",{
                    body:form,
                    headers:{
                        "Content-Type":"applications/json",
                        Accept:"application/json",
                    },
                })
                .then((res)=>{
                    setLoading(false);
                    setResponse(true);
                    setform(initialForm)
                    setTimeout(()=>setResponse(false),5000);
                })

        }else{
            return;
        }
    };
    
    return {
        form,errors,loading,response,handleChange,handleBlur,handleSubmit
    }
}
