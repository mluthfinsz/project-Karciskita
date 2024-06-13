import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ className }) => {
  return (
    <Form className={className} style={{ marginTop: "25%" }}>
      {" "}
      {/* Mengubah margin-top menjadi 35% */}
      <InputGroup
        className="mb-3 mx-auto"
        style={{
          border: "2px solid #4f4cee",
          padding: "1rem 1rem",
          width: "50rem",
        }}
      >
        <Form.Control
          type="text"
          placeholder="Search by events, name, location, and more"
          aria-label="Search"
          aria-describedby="basic-addon1"
          style={{ border: "none", boxShadow: "none" }}
        />
        <Button
          variant="outline"
          style={{
            border: "1px solid #4f4cee",
            marginLeft: "1rem",
            width: "10rem",
            borderRadius: "5px",
            color: "#4f4cee",
          }}
        >
          <FaSearch />
          <span style={{ marginLeft: "0.5rem" }}>Search</span>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchInput;
