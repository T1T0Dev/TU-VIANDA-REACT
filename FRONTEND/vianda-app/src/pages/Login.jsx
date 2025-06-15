import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componente de Login

function Login() {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", {
        usuario,
        pass
      });

      localStorage.setItem("token", res.data.token);

      setIsAuthenticated(true);
      toast.success("¡Inicio de sesión exitoso!", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/venta");
      }, 2000);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error al iniciar sesión",
        { autoClose: 3000 }
      );
      console.error("Error de login:", error.response?.data || error.message);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <h2>Iniciar sesión</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
