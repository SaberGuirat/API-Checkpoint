import React from "react";
import { Card } from "react-bootstrap";

function UserCard({ data }) {
  return (
    <div>
      <Card
        style={{ width: "18rem", margin: 20 }}
        className="text-center"
        bg="dark"
        text="white"
      >
        <Card.Header>{data.username}</Card.Header>
        <Card.Body>
          <Card.Img
            src="https://www.whiznicsolutions.com/imgs/user-experience-design.png"
            style={{ width: 64 }}
          />
          <Card.Title>{data.name}</Card.Title>
          <hr />
          <span>Email: {data.email}</span>
          <hr />
          <span>Adress</span>
          <br />
          <span>Street: {data.address.street}</span>
          <br />
          <span>City: {data.address.city}</span>
          <br/>
          <span>ZipCode: {data.address.zipcode}</span>
          <hr />
          <span>Phone: {data.phone}</span>
          <hr />
          Company: {data.company.name}
        </Card.Body>
        <Card.Footer className="text-muted">www.{data.website}</Card.Footer>
      </Card>
    </div>
  );
}

export default UserCard;
