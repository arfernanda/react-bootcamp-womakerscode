import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-react-ui';

function ExampleComponent(porps) {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState(props.name);

  useEffect(() => {
  //
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //executa alguma request
  };

  // RENDERS ------------------------------

  const renderForm = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input name="name" value={name} onChange={(e) =>
          setName(e.target.value)} />
        <Form.Input name="email" value={email} onChange={(e) =>
          setEmail(e.target.value)} />
        <Form.Button type="submit">Submit!</Form.Button>
      </Form>
    );
  };

  // RENDER --------------------------------

  return (
    <div>
    {showForm ? (
      renderForm()
    ) : (
      <Fragment>
        <h3>Hi, {name}</h3>
        <Button onClick={toggleShowForm}>
          Enter Email Address!
        </Button>
      </Fragment>
    )}
    </div>
  );
}

export default ExampleComponent;
