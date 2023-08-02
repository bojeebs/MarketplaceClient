import './App.css';
import { AuthProvider } from './AuthContext';

function App() {
const [authenticated, toggleAuthenticated] = useState(false)
const [user, setUser] = useState(null) 






  return (
    <>
    <AuthProvider>

    </AuthProvider>
    <div>
        <h1>Test</h1>
    </div>
    </>
    
  );
}

export default App;
