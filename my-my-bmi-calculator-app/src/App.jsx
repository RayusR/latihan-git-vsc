import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
  };

  return (
    <Container fluid className="main-container">
      <div className="left-section">
        <div className="calculator-section">
          <h1>BMI Calculator</h1>
          <Form>
            <Form.Group controlId="weightInput">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kg"
              />
            </Form.Group>
            <Form.Group controlId="heightInput" className="mt-3">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in cm"
              />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={calculateBMI}>
              Calculate BMI
            </Button>
          </Form>

          {bmi && (
            <Alert className="mt-4" variant="success">
              Your BMI is: {bmi}
            </Alert>
          )}
        </div>
      </div>

      <div className="right-section">
        <img 
          src="https://www.ebony.com/wp-content/uploads/2012/05/09/running_original_9855.jpg" 
          alt="BMI Table" 
          className="bmi-table-image"
        />
      </div>
    </Container>
  );
}

export default App;
