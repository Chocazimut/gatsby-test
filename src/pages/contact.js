import React from "react"
import { Button, Form } from "react-bootstrap"
import PrimaryLayout from "../layout/PrimaryLayout"

export default () => (
  <PrimaryLayout column="col-10">
    <div className="pt-5">
      <h1>Contact us</h1>
      <Form>
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email..." />
        </Form.Group>
        <Form.Group controlId="contactForm.Subject">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Subject..." />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
      <Form.Group controlId="contactForm.Sub">
        <Button>Submit</Button>
      </Form.Group>
    </div>
  </PrimaryLayout>
)
