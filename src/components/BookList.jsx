import SingleBook from "./SingleBook";
import { Component } from "react";
import { Row, Col, Form, FormControl, FormGroup } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    textToSearch: "",
    book_selected: "", //asin del libro
  };
  saveTextToSearch(value) {
    this.setState({ textToSearch: value });
  }

  setBookClicked = (value) => {
    this.setState({ book_selected: value });
  };

  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <FormControl
                  type="text"
                  name="search"
                  id="search"
                  value={this.state.textToSearch} // evita warning in console
                  placeholder="Cerca libro"
                  onChange={(e) => this.saveTextToSearch(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col className="d-flex flex-wrap justify-content-between">
            {this.props.books
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.textToSearch.toLowerCase())
              )
              .map((b) => {
                return (
                  <SingleBook
                    setBookClicked={this.setBookClicked}
                    book={b}
                    key={`book-${b.asin}`}
                  />
                );
              })}
          </Col>
          <Col>
            <CommentArea book_asin={this.state.book_selected}></CommentArea>
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
