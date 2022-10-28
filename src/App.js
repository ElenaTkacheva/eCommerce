import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Диван",
          img: "sofa1.jpg",
          desc: "Самый комфортный диван",
          category: "sofa",
          price: "1200",
        },
        {
          id: 2,
          title: "Стол",
          img: "table3.jpg",
          desc: "Самый лучший стол",
          category: "table",
          price: "799",
        },
        {
          id: 3,
          title: "Лампа",
          img: "lamp1.jpg",
          desc: "Самая лучшая лампа",
          category: "lamp",
          price: "177",
        },
        {
          id: 4,
          title: "Ковер",
          img: "carpet1.jpg",
          desc: "Самый лучший ковер",
          category: "carpet",
          price: "345",
        },
        {
          id: 5,
          title: "Диван",
          img: "sofa2.jpg",
          desc: "Самый комфортный диван",
          category: "sofa",
          price: "999",
        },
        {
          id: 6,
          title: "Стол",
          img: "table1.jpg",
          desc: "Самый лучший стол",
          category: "table",
          price: "559",
        },
        {
          id: 7,
          title: "Стул",
          img: "chair1.jpg",
          desc: "Самый лучший стул",
          category: "chair",
          price: "455",
        },
        {
          id: 8,
          title: "Лампа",
          img: "lamp2.jpg",
          desc: "Самая лучшая лампа",
          category: "lamp",
          price: "189",
        },
        {
          id: 9,
          title: "Диван",
          img: "sofa3.jpg",
          desc: "Самый комфортный диван",
          category: "sofa",
          price: "1399",
        },
        {
          id: 10,
          title: "Ковер",
          img: "carpet2.jpg",
          desc: "Самый лучший ковер",
          category: "carpet",
          price: "149",
        },
        {
          id: 11,
          title: "Стул",
          img: "chair2.jpg",
          desc: "Самый лучший стул",
          category: "",
          price: "249",
        },
        {
          id: 12,
          title: "Стул",
          img: "chair3.jpg",
          desc: "Самый лучший стул",
          category: "chair",
          price: "250",
        },
        {
          id: 13,
          title: "Диван",
          img: "sofa4.jpg",
          desc: "Самый комфортный диван",
          category: "sofa",
          price: "1119",
        },
        {
          id: 14,
          title: "Лампа",
          img: "lamp3.jpg",
          desc: "Самая лучшая лампа",
          category: "lamp",
          price: "199",
        },
        {
          id: 15,
          title: "Ковер",
          img: "carpet3.jpg",
          desc: "Самый лучший ковер",
          category: "carpet",
          price: "799",
        },
        {
          id: 16,
          title: "Стол",
          img: "table2.jpg",
          desc: "Самый лучший стол",
          category: "table",
          price: "999",
        },
        {
          id: 17,
          title: "Лампа",
          img: "lamp4.jpg",
          desc: "Самая лучшая лампа",
          category: "lamp",
          price: "79",
        },
        {
          id: 18,
          title: "Ковер",
          img: "carpet4.jpg",
          desc: "Самый лучший ковер",
          category: "carpet",
          price: "699",
        },
        {
          id: 19,
          title: "Стол",
          img: "table4.jpg",
          desc: "Самый лучший стол",
          category: "table",
          price: "1399",
        },
        {
          id: 20,
          title: "Стул",
          img: "chair4.jpg",
          desc: "Самый лучший стул",
          category: "chair",
          price: "89",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true;
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  };
}

export default App;
