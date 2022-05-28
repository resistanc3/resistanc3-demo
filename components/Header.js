import { ConnectButton } from "web3uikit";
import "../styles/Home.module.css"

export default function Header() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark justify-content-center" id="#mainNavbar" style={{ backgroundColor: "#1B317B"}}>
    <a className="navbar-brand" href="#">
      Resistanc3
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active px-4">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link" href="#">
            How it works
          </a>
        </li>
        <li className="nav-item px-4">
          <a className="nav-link" href="#">
            Faq
          </a>
        </li>
        <li className="nav-item px-4">
            <a className="nav-link" href="#">
                Play
            </a>
        </li>
      </ul>
      <div className="ml-auto py-2 px-4">
        <ConnectButton moralisAuth={false}/>
        </div>
        </div>
    </nav>
)};