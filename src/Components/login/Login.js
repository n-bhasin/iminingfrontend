import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLibs";
import Form from "react-bootstrap/Form";
import LoaderButton from "../common/LoaderButton";
import { onError } from "../../libs/errorLib";
import { useFormFields } from "../../libs/hooksLib";
import auth from "../../services/auth";
import "./login.css";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });
  const history = useHistory();

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await auth.login(fields.email, fields.password);

      //   await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (error) {
      onError(error);
      setIsLoading(false);
    }
  }
  if (auth.getCurrentUser()) return <Redirect to="/" />;
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}
