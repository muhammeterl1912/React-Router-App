import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthenticateContext } from "./context/Authenticate";

const LoginForm = () => {
  const { setAuthenticate } = useAuthenticateContext()
  const handleSubmit = (e)=> {
    e.preventDefault()
    navigate("/")
    setAuthenticate(true)
  }
const navigate = useNavigate()

  return (
    <Form
      className="w-50 m-auto mt-5"
      onSubmit={handleSubmit}
    >
      <h4 className="text-start mb-5 text-danger">
        You Need to Login to see the App
      </h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
