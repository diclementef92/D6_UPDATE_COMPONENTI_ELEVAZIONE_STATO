import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <>
        <div className="card m-2 singlebook">
          <img
            className="card-img-top "
            src={this.props.book.img}
            alt="cover-libro"
            onClick={() => this.props.setBookClicked(this.props.book.asin)}
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
