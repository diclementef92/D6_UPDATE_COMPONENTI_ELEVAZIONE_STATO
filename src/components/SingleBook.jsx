import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  toggleClassSelected(e) {
    console.log("carta cliccata", e.target.parentNode);
    e.target.parentNode.classList.toggle("selected");
  }

  render() {
    return (
      <>
        <div className="card m-2 singlebook">
          <img
            className="card-img-top "
            src={this.props.book.img}
            alt="cover-libro"
            onClick={(e) => {
              this.props.setBookClicked(this.props.book.asin);
              this.toggleClassSelected(e);
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.book.title}</h5>
            <p className="card-text">{this.props.book.price}€</p>
            <a href="#" className="btn btn-primary">
              Dettagli
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default SingleBook;
