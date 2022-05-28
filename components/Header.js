import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="py-4 px-4 border-b-2 flex flex-row justify-content-center">
            <h1 className="py-4 px-4 font-bold text-3xl"> The Resistanc3 DApp</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}