export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Page Not Found</p>
      <a href="/" className="mt-8 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
}
