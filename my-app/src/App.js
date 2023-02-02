import css from './App.module.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* Add your components here */}
    </div>
  );
}

export default App;