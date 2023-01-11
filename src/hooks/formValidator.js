import React, { useCallback } from 'react';
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (!value) {
      setErrors({ ...errors, [name]: 'Обязательное поле для заполнения' });
    } else if (name === 'email' && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      setErrors({ ...errors, [name]: 'Некорректный email' });
    } else if (name === 'username' && (value.length < 2 || value.length > 30)) {
      setErrors({
        ...errors,
        [name]: 'Поле должно содержать от 2 до 30 символов',
      });
    } else if (name === 'username' && !/^[a-zA-Z\- \u0400-\u04FF]*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: 'Поле должно содержать только латиницу, кириллицу, пробел или дефис',
      });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
