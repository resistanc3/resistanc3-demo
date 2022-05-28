import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navLinks">
                <ul className="navbar-nav">
                    <li className="navbar-nav">
                        <a href="" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item px-4">
                        <a href="" className="nav-link">How it works</a>
                    </li>
                </ul>
            </div>
            <h1 className="py-4 px-4 font-bold text-3xl"> The Resistanc3 DApp</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}