import React from "react"
import { Card, Button } from "react-bootstrap"

export default ({ title, content, image, readMore }) => (
  <div className="p-3">
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: title }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: content }} />
        <Button variant="primary" href={readMore}>
          Read More...
        </Button>
      </Card.Body>
    </Card>
  </div>
)
