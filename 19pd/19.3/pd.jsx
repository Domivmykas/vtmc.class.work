import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// Define the components for different pages
const Home = () => <div>Home Page</div>;
const About = () => <div>About Us Page</div>;
const Contact = () => <div>Contact Page</div>;

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Pagrindinis</Link>
        </li>
        <li>
          <Link to="/about">Apie mus</Link>
        </li>
        <li>
          <Link to="/contact">Kontaktai</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <header>
        <NavigationMenu />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
