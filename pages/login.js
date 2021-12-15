

import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { PageTitle } from 'components/shared';
import { useForm } from "react-hook-form";
import { useMutate } from "restful-react";
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const { mutate: login, loading, error } = useMutate({
    verb: 'POST',
    path: 'login'
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    login(data).then(_ => router.push('/'));
  }

  return (
    <>
   


      <div className="bwm-form">



        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <PageTitle text="Login" />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  ref={register}
                  type="email"
                  name="email"
                  placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={register}
                  name="password"
                  type="password"
                  placeholder="Password" />
              </Form.Group>
              {error &&
                <Alert variant="danger">
                  {error?.data}
                </Alert>
              }
              <Button
                className="colorg"
                disabled={loading}
                variant="outline-success"
                type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
<style jsx>
  {
    `
    .bwm-form{
      margin-top:100px;
    }

    .colorg{
      background-color: #1BC787; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
    }

    `
  }
</style>


    </>
  )
}



export default Login;
