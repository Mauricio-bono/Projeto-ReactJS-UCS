import { useState } from 'react';
import { IBook } from '../interfaces/book.interface';

interface BookForm {
    name: string;
    email: string;
    year: string;
}

function useForm(validationFunction: (values: any) => Record<string, string>) {
  const [errors, setErrors] = useState({});

  function validate(values: any) {
    const errors: BookForm = {
        name: "",
        email: "",
        year: "",
    }
    if (!values.name) {
      errors.name = "O nome é obrigatório";
    }
    if (!values.email) {
      errors.email = "O e-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "E-mail inválido";
    }
    if (!values.year && values.year > 2025) {
      errors.year = "O ano é obrigatório";
    }
    return errors;
 }
  return { validate };
  
}

export default useForm;