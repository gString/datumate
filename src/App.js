import './App.css';
import { GCPContextProvider } from "./contexts/GCPContext";
import { ImportModal } from "./ImportModal";
import { ListDisplay } from "./List/ListDisplay";
import { ErrorDisplay } from "./ErrorDisplay";
import { EditItem } from "./EditItem";

function App() {
  return (
    <div className="App">
        <GCPContextProvider>
            <ImportModal />
            <ErrorDisplay />
            <EditItem />
            <ListDisplay />
        </GCPContextProvider>
    </div>
  );
}

export default App;
