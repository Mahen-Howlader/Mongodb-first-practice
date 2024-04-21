import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border border-gray-500 p-4 bg-white shadow-md rounded-lg">
    <h1 className='text-2xl mb-4'>Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="user"
        placeholder="Enter your username"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
    </>
  )
}

export default App
