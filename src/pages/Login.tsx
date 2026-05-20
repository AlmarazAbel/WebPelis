import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface Props {
  onLogin: () => void;
}

// 1. Definimos los campos del formulario para TypeScript
interface LoginFormInputs {
  user: string;
  pass: string;
}

const Login = ({ onLogin }: Props) => {
  const navigate = useNavigate();

  // 2. Inicializamos React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // 3. Esta función solo se ejecuta si los campos pasan las validaciones nativas
  const onSubmit = (data: LoginFormInputs) => {
    // Las credenciales ahora vienen dentro del objeto 'data'
    if (data.user === "admin" && data.pass === "admin") {
      Swal.fire({
        title: "¡Bienvenido, Administrador!",
        text: "Ingreso exitoso al sistema.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        background: "#111827",
        color: "#fff",
      }).then(() => {
        onLogin();
        navigate("/admin");
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrectos",
        icon: "error",
        background: "#111827",
        color: "#fff",
        confirmButtonColor: "#7c3aed",
      }).then(() => {
        // 4. React Hook Form nos da 'reset()' para limpiar todo el formulario al toque
        reset();
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b17] flex items-center justify-center p-4">
      <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Admin Login</h2>

        {/* 5. El handleSubmit de React Hook Form envuelve a nuestro onSubmit e intercepta el evento */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          
          {/* CAMPO: USUARIO */}
          <div>
            <input
              type="text"
              placeholder="Usuario"
              // 6. Conectamos el input registrándolo con sus reglas de validación
              {...register("user", { required: "El usuario es obligatorio" })}
              className={`w-full bg-gray-800 border rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-violet-600 transition-all ${
                errors.user ? "border-red-500 focus:ring-red-500" : "border-gray-700"
              }`}
            />
            {/* 7. Si hay un error en 'user', mostramos el mensaje abajo del input */}
            {errors.user && (
              <p className="text-red-500 text-xs mt-1 pl-1">{errors.user.message}</p>
            )}
          </div>

          {/* CAMPO: CONTRASEÑA */}
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("pass", { required: "La contraseña es obligatoria" })}
              className={`w-full bg-gray-800 border rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-violet-600 transition-all ${
                errors.pass ? "border-red-500 focus:ring-red-500" : "border-gray-700"
              }`}
            />
            {errors.pass && (
              <p className="text-red-500 text-xs mt-1 pl-1">{errors.pass.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-lg transition-all"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;