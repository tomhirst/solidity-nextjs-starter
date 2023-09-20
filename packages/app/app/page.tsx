import { Wrapper } from "./components/Wrapper"

const Home = () => {
  return (
    <main>
      <Wrapper>
        <div className="space-y-8">
            <div className="flex flex-col space-y-4">
              <input
                className="border p-4 w-100 text-center"
                placeholder="A fetched greeting will show here"
                //value={greeting}
                disabled
              />
              <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md w-full"
                  //onClick={fetchGreeting}
                >
                  Fetch greeting from the blockchain
                </button>
            </div>
            <div className="space-y-8">
              <div className="flex flex-col space-y-4">
                <input
                  className="border p-4 text-center"
                  //onChange={ e => setNewGreetingState(e.target.value)}
                  placeholder="Write a new greeting"
                  //ref={newGreetingInputRef}
                />
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md"
                  //onClick={setGreeting}
                >
                  Set new greeting on the blockchain
                </button>
                <div className="h-2">
                  { /*newGreetingMessage && <span className="text-sm text-gray-500 italic">{newGreetingMessage}</span> */}
                </div>
              </div>
            </div>
            <div className="h-4">
              { /*connectedWalletAddress && <p className="text-md">{connectedWalletAddress}</p> */}
            </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default Home;