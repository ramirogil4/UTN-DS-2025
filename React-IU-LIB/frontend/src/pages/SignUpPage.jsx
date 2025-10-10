import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setToken } from "../helpers/auth";
import { signupSchema } from "../validations/signupSchema";
import { AuthContainer } from "../components/AuthContainer";
import { AuthField } from "../components/AuthField";


import "../styles/SignUpPage.css";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
  });

  // Traer géneros desde backend
  useEffect(() => {
    fetch(`${API_URL}/genres`)
      .then((res) => res.json())
      .then((result) => setGenres(result.data))
      .catch(console.error);
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log("Datos enviados al backend:", data);
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          surname: data.surname,
          email: data.email,
          password: data.password,
          gender: data.gender,
          dateOfBirth: new Date(data.dateOfBirth).toISOString(),
          genreId: parseInt(data.genre, 10),
        }),
      });

      const responseData = await res.json();

      if (!res.ok || !responseData.data?.token) {
        throw new Error(responseData.message || "No se pudo registrar el usuario");
      }

      setToken(responseData.data.token);
      navigate("/home");
    } catch (err) {
      setError("root", { type: "manual", message: err.message || "Error desconocido" });
    }
  };

  return (
    <AuthContainer type="signup" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="signup-title">Registro de Usuario</h1>

      <AuthField
        id="name"
        type="text"
        placeholder="Nombre"
        registerField={register("name")}
        error={errors.name?.message}
      />
      <AuthField
        id="surname"
        type="text"
        placeholder="Apellido"
        registerField={register("surname")}
        error={errors.surname?.message}
      />
      <AuthField
        id="email"
        type="email"
        placeholder="Email"
        registerField={register("email")}
        error={errors.email?.message}
      />
      <AuthField
        id="password"
        type="password"
        placeholder="Contraseña"
        registerField={register("password")}
        error={errors.password?.message}
      />
      <AuthField
        id="dateOfBirth"
        type="date"
        placeholder="Fecha de nacimiento"
        registerField={register("dateOfBirth")}
        error={errors.dateOfBirth?.message}
      />

      <Form.Group className="mb-3">
        <Form.Label>Género</Form.Label>
        <div>
          {["MASCULINO", "FEMENINO", "OTRO"].map((g) => (
            <Form.Check
              key={g}
              type="radio"
              label={g.charAt(0) + g.slice(1).toLowerCase()}
              value={g}
              {...register("gender")}
              onChange={() => clearErrors("gender")}
            />
          ))}
        </div>
        {errors.gender && <div className="field-error">{errors.gender.message}</div>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Género favorito</Form.Label>
        <Form.Select
          {...register("genre")}
          onChange={(e) => {
            setValue("genre", parseInt(e.target.value, 10), { shouldValidate: true });
            clearErrors("genre");
          }}
        >
          <option value="">Seleccioná tu género favorito</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </Form.Select>
        {errors.genre && <div className="field-error">{errors.genre.message}</div>}
      </Form.Group>

      <Button type="submit" className="button-form" disabled={isSubmitting}>
        {isSubmitting ? "Registrando..." : "Registrarme"}
      </Button>

      {errors.root?.message && <div className="field-error">{errors.root.message}</div>}

      <p className="signup-register-link">
        ¿Ya tenés cuenta?{" "}
        <span
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", color: "#0d6efd", textDecoration: "none" }}
        >
          Inicia Sesión
        </span>
      </p>
    </AuthContainer>
  );
}
