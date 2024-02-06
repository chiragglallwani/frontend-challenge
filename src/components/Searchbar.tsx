import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Container,
  Form,
  FormControlProps,
  Stack,
} from "react-bootstrap";

interface SearchBarProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleImageSubmit(event: React.MouseEvent<HTMLButtonElement>): void;
}

function Searchbar({
  searchText,
  setSearchText,
  handleImageSubmit,
}: SearchBarProps) {
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value);
  };
  return (
    <Container fluid="sm">
      <Stack direction="horizontal" gap={1}>
        <Form.Control
          className="me-auto"
          type="text"
          placeholder="Search Images here"
          value={searchText}
          onChange={handleSearchChange}
        />
        <Button
          disabled={searchText === ""}
          onClick={handleImageSubmit}
          type="submit"
          variant="success"
        >
          Search
        </Button>
      </Stack>
    </Container>
  );
}

export default Searchbar;
