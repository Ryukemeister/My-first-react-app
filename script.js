/*
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

function MainContent() {
  return (
    <div className="main">
      <h1>I'm learning React!</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="list-contents">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Rate us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

const h1 = document.createElement("h1");
h1.textContent = "I'm learning react";
h1.className = "header";
const root = document.getElementById("root");
root.appendChild(h1);
console.log(h1);

console.log(title);

const title = <h1 className="heading">Hey there</h1>;

ReactDOM.render(
  <div>
    <h1>Please do the rest of the work React</h1>
    <Navbar />
    <MainContent />
    <Footer />
  </div>,
  document.getElementById("root")
);

// JSX always returns plain JavaScript objects
root.append(JSON.stringify(pageOne));
console.log(JSON.stringify(pageOne));

const navbar = (
  <nav>
    <h1>Ryuk's Reactist</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const pageOne = (
  <div>
    <h1>Hi there, this is try one</h1>
    <h2>Hello, this one's try two</h2>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <ol>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ol>
  </div>
);

// Using createRoot instead of ReactDOM.render
// root.render(pageOne);
*/

// React 17 method of rendering
// ReactDOM.render(navbar, document.getElementById("root"));

// Bob's way of rendering in React 18
// ReactDOM.createRoot(document.getElementById("root")).render(navbar);

// Official documention of using createRoot in react 18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(navbar);

const root = ReactDOM.createRoot(document.getElementById("root"));

function FunfactsAboutReact() {
  return (
    <section>
      <nav className="navbar">
        <img
          className="react-logo"
          src="./React logo.png"
          style={{
            marginLeft: 30 + "px",
            marginTop: 15 + "px",
          }}
        ></img>
      </nav>
      <main>
        <h1
          className="title"
          style={{
            marginLeft: 30 + "px",
            fontSize: 55 + "px",
          }}
        >
          Fun facts about React
        </h1>
        <ul
          className="list "
          style={{
            marginLeft: 50 + "px",
          }}
        >
          <li className="list-element">Was first released in 2013</li>
          <li className="list-element">
            Was originally created by Jordan Walke{" "}
          </li>
          <li className="list-element">Has well over 100k stars on Github</li>
          <li className="list-element">Is maintained by Facebook</li>
          <li className="list-element">
            Powered thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </main>
    </section>
  );
}

root.render(<FunfactsAboutReact />);
