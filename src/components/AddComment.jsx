import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Chat } from "react-bootstrap-icons";

class AddComment extends Component {
  state = {
    author: "",
    comment: "",
    rate: 0,
  };

  async sendComment() {
    console.log("invia commento");
    let settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MThjZGEyNDc4ZDAwMTNhMDU4NjciLCJpYXQiOjE2NzU5NTg5NjMsImV4cCI6MTY3NzE2ODU2M30.Q1jX-HShMVTgkyRHM4th05_jV0PN_rkjeroFWeC2A1M",
      },
      body: JSON.stringify({
        author: "francesco@abc.it",
        comment: "bello",
      }),
    };
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.book_asin,
        settings
      );
      if (response.ok) {
        let body = await response.json();
        console.log(body);
      } else {
        console.log(response.status, response);
      }
    } catch (e) {
      console.log("error in fetch comments", e);
    }
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  updateComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-1" controlId="form.control.mail">
              <Form.Control
                type="email"
                placeholder="la tua mail"
                onChange={(e) => this.updateEmail(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.control.comment">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="dicci cosa ne pensi"
                onChange={(e) => this.updateComment(e)}
              />
            </Form.Group>
            <Button onClick={this.sendComment}>invia</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddComment;
// <Form onSubmit={this.addComment}>
//   <Form.Group>
//     <Form.Control type="text" placeholder="la tua email" name="email" />
//     <Form.Control
//       type="text"
//       placeholder="il tuo commento"
//       name="comment"
//     />
//     <Button>invia</Button>
//   </Form.Group>

//   {/* <Chat onClick={() => this.addComment()} className="bi bi-chat"></Chat> */}
// </Form>
