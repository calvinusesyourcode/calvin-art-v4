export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/waterfall-loop-optimized.gif"
        alt="Waterfall Loop"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 p-8 text-white">
        <h1 className="mb-4 text-4xl font-bold">hello, friend!</h1>
        <p className="font-mono text-xl">
          welcome to my corner of the internet :)
        </p>
      </div>
    </div>
  )
}