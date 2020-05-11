import React from "react";
import Card from "../components/Card";

// import images
import first_image from "../assets/images/placeholder_image1.jpg";
import second_image from "../assets/images/placeholder_image2.jpg";
import third_image from "../assets/images/placeholder_image3.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "AsIAm",
          subTitle: "iOS App",
          imgSrc: first_image,
          link: "https://github.com/sankarra/AsIAm/",
          selected: false,
        },
        {
          id: 1,
          title: "Aahad Patel",
          subTitle: "Personal GitHub",
          imgSrc: second_image,
          link: "https://github.com/aahadpatelusc/",
          selected: false,
        },
        {
          id: 2,
          title: "Food",
          subTitle: "Food",
          imgSrc: third_image,
          link: "https://github.com/njpietrow/ImHungry",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    // if selected set to false if not set to true
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
