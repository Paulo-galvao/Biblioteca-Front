import RegisterForm from "../Components/Form/RegisterForm";
import { MdMenuBook } from "react-icons/md";


function Register() {
  return (
    <div className="h-dvh flex items-center">
      <div className="w-full">
        <MdMenuBook />
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 mb-6">
          Crie sua conta
        </h2>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
