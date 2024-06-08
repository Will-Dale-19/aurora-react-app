import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MedicalForm from "./pages/MedicalForm";
import './App.css';
import MedicalFormsHome from "./pages/MedicalFormsHome";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={'/'}
                            element={<MedicalFormsHome/>}>
                        </Route>
                        <Route
                            path={'medical-form/:form_id'}
                            element={<MedicalForm/>}
                        />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}
export default App;
