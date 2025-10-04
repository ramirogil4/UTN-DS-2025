import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/loginSchema";
import { AuthContainer } from "../components/AuthContainer";
import { AuthField } from "../components/AuthField";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setToken } from "../helpers/auth";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("Form enviado", data);

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      console.log("responseData", responseData);

      // Verificar que exista token en la respuesta
      if (!res.ok || !responseData.data?.token) {
        throw new Error("Correo o contraseña inválidos");
      }

      // Guardar token
      setToken(responseData.data.token);

      // Redirigir al home
      navigate("/home");
    } catch (err) {
      setError("root", {
        type: "manual",
        message: err.message || "Error desconocido",
      });
    }
  };

  return (
    <AuthContainer type="login" onSubmit={handleSubmit(onSubmit)} validated={false}>
      <h1 className="login-title">Iniciar Sesión</h1>

      <AuthField
        id="email"
        type="email"
        placeholder="Correo electrónico"
        error={errors.email?.message}
        registerField={register("email")}
      />

      <AuthField
        id="password"
        type="password"
        placeholder="Contraseña"
        error={errors.password?.message}
        registerField={register("password")}
      />

      {/* Mensaje de error global */}
      {errors.root?.message && (
        <div className="login-error-message">
          {errors.root.message}
        </div>
      )}

      <Button type="submit" className="button-form">
        Ingresar
      </Button>

      <Link to="/register" className="register-button">
        ¿No tenés cuenta? Registrate
      </Link>
    </AuthContainer>
  );
}
