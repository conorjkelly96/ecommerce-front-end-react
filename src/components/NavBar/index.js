import { Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="category" href="category">
            Category
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product" href="product">
            Product
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tag" href="tag">
            Tag
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
