import Cart from "./cart";
import SearchBar from "./searchBar";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="titel-name">
        <h2>Me Shop</h2>
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <Cart count={cartCount} />
    </header>
  );
}
export default Header;
