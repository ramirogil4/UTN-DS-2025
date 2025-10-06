import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  surname: yup.string().required("El apellido es requerido"),
  email: yup
      .string()
      .required('El email es requerido')
      .email('Debe ser un email válido'),
    password: yup
      .string()
      .required('La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula'),
  genre: yup.string().required("Seleccioná tu sección favorita"),
  gender: yup.string().required("Seleccioná tu género"),
  dateOfBirth: yup.string().required("La fecha de nacimiento es requerida"),
});