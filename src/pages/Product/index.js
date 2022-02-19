import { Button, Form } from "react-bootstrap";

export const Product = () => {
  const createProduct = () => {
    alert("createProduct");
  };

  return (
    <Form className="m-5 p-5">
      <h1>Create a new product below:</h1>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Enter Product Name: </Form.Label>
        <Form.Control type="text" placeholder="Enter product name" />
        <Form.Text className="text-muted">Invalid product name</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="productPrice">
        <Form.Label>Product Retail Price</Form.Label>
        <Form.Control
          type="number"
          min="1"
          step="any"
          placeholder="Enter the retail price for this product"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="selectCategory">
          Select Product Category
        </Form.Label>
        <Form.Select id="selectedProductCategory">
          <option>Menswear</option>
          <option>Womenswear</option>
          <option>Kidswear</option>
          <option>Homewear</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="isItemInStock">
        <Form.Check type="checkbox" label="Is this item in stock?" />
      </Form.Group>
      <Button onSubmit={createProduct} variant="primary" type="submit">
        Create Product
      </Button>
    </Form>
  );
};
