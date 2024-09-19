import "./App.css";
import Header from "./Components/Header";
import Restaurants from "./Components/Restaurants";
import ProductContainer from "./Components/ProductContainer";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      {/* <ProductContainer products={restaurants[3].items}/> */}
      <Restaurants restaurants={restaurants} />

    </div>
  );
}

const AllRestaurants = http://localhost:8000/Restaurants



const restaurants = [
  {
    name: "Happy Burrata",
    capacity: "100",
    address: "Mladost 2, Sofia",
    isOpen: false,
  },
  {
    name: "Burkana",
    capacity: "25",
    address: "Polikraishte, Veliko Turnovo",
    isOpen: true,
  },
  {
    name: "Shatrite",
    capacity: "40",
    address: "Purvomaitsi, Veliko Turnovo",
    isOpen: true,
  },
  {
    name: "Pri Shopite",
    capacity: "250",
    address: "Studentski Grad, Sofia",
    isOpen: false,
    items : [
      {
        name: "САЛАТА ХАЛКИДИКИ",
        price: 10.50,
        grams: 350,
        description: "Салата с фета мус, домат, краставица, пресен зелен и червен пипер, репички, маслини и магданозено песто."
       },
      {
        name: "ЛИМОНАДА С МАНГО",
        price: 4.99,
        grams: 500,
        description: "Газирана лимонада с прясно манго, босилек, фреш портокал, фреш лимон и сода."
      },
      {
        name: "Рома",
        price: 14.50,
        grams: 400,
        description: "Розови домати, авокадо дип с рикота, маслини, хрупкав хляб от Сардиния, печен пипер, песто дресинг и босилек."
      },
    ]
  },
];

export default App;
