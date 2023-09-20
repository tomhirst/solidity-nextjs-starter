import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Wrapper } from "./Wrapper"

const Header = () => {
    return (
        <header className="py-8 md:mt-16">
            <Wrapper>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Solidity Next.js Starter</h1>
                    <ConnectButton />
                </div>
            </Wrapper>
        </header>
    )
}

export { Header }