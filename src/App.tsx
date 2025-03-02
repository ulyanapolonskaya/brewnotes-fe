import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BrewNotes</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/beans/new" className="hover:underline">
                  Add Bean
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>BrewNotes - Track your coffee journey</p>
        </div>
      </footer>
    </>
  );
}

export default App;
