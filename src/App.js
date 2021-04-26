// Styles
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

// Composants

//Images

function App() {
  return (
    <div class="container">
      <Header />
      <NavigationMenu />
      <Content />
      <Footer
        tech="React"
        formation="Le Réacteur"
        name="Claire Hart de Keating"
      />
    </div>
  );
}

export default App;
