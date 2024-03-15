import React, { Component } from "react";

const dataGlass = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class ChangeGlass extends Component {
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };
  handleChangeGlass = (id) => {
    // var data = dataGlass[id]
    console.log(dataGlass[id].url);
    this.setState({
      id: dataGlass[id].id,
      price: dataGlass[id].price,
      name: dataGlass[id].name,
      url: dataGlass[id].url,
      desc: dataGlass[id].desc,
    });
  };
  renderListGlass() {
    let content = dataGlass.map((glass, index) => {
      return (
        <div className="col-2" key={index}>
          <button
            value={index}
            onClick={() => {
              this.handleChangeGlass(index);
            }}
          >
            <img src={glass.url} alt="" className="w-50" />
          </button>
        </div>
      );
    });
    return content;
  }
  render() {
    return (
      <div>
        <div className="pb-4 bg">
          <div className="container d-flex align-items-center py-5">
            <div className="w-50 mx-5 text-center position-relative">
              <img src="./glassesImage/model.jpg" width={"50%"} alt="" />
              <img
                src={this.state.url}
                alt=""
                className="position-absolute w-25"
                style={{ top: "85px", right: "37.5%", opacity: "0.5" }}
              />
              <div className="position-absolute top-100 start-50 translate-middle w-50 bg-dark text-light">
                <h5 className="text-start mx-2 py-2">{this.state.name}</h5>
                <p className="text-start mx-2">Price: {this.state.price}$</p>
                <p className="text-start mx-2">{this.state.desc}</p>
              </div>
            </div>
            <div className="w-50 mx-5 text-center">
              <img src="./glassesImage/model.jpg" width={"50%"} alt="" />
            </div>
          </div>

          <div className="shop pt-5 mt-5 container">
            <div className="row">{this.renderListGlass()}</div>
          </div>
        </div>
      </div>
    );
  }
}
