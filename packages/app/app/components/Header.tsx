import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Wrapper } from "./Wrapper";

const Header = () => {
  return (
    <header className="py-8 border-b mb-10">
      <Wrapper>
        <div className="flex items-center justify-between">
          <h1 className="text-lg md:text-2xl font-bold">
            Solidity Next.js Starter
          </h1>
          <ConnectButton
            showBalance={false}
            accountStatus="address"
            label="Connect"
          />
        </div>
      </Wrapper>
    </header>
  );
};

export { Header };
