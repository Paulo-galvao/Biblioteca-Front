import Button from "./Button";
import FormContainer from "./FormContainer";
import Input from "./Input";
import Label from "./Label";
import React from "react";
import { useNavigate } from "react-router";

function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = { name, username, password };

    fetch("http://localhost:3021/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);

        localStorage.setItem("token", data.token);
        if (!data.sucess) {
          console.log(data.message);
          return setError(data.message);
        }
        navigate("/");
      });
  }

  return (
    <div>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <Label for="name">Nome</Label>
            <Input
              id="name"
              name="name"
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </div>

          <div>
            <Label for="username">Nome de usuário</Label>
            <Input
              id="username"
              name="username"
              onChange={({ target }) => {
                setUsername(target.value);
              }}
            />
          </div>

          <div>
            <Label for="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </div>

          {error && <div className="border border-red-900 px-2 py-2.5 mb-5 rounded-md bg-red-400 text-center ">{error}</div>}
          
          <div>
            <Button>Registrar</Button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}

export default RegisterForm;
