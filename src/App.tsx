function App() {
  return (
    <div className="w-full h-screen grid place-content-center bg-rainbow-stripes relative">
      <div className="absolute inset-0 bg-white opacity-50" />
      <div className="flex flex-col gap-8 bg-white rounded-3xl items-center p-16 z-10">
        <h1 className="text-5xl">poggers.lgbt</h1>
        <p className="text-lg">
          owned by Brooke,{" "}
          <a className="text-blue-600" href="https://breq.dev/">
            breq.dev
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
