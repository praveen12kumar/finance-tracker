import Navbar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import IncomeExpense from './pages/incomeExpenseForm/IncomeExpense';
import Income from "./pages/income/Income.jsx";
import Expense from './pages/expense/Expense.jsx';
import Saving from './pages/saving/Saving.jsx';
import FinanceReports from './pages/report/FinanceReports.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<IncomeExpense />} />
        <Route path='/income' element={<Income/>} />
        <Route path='/expense' element={<Expense/>} />
        <Route path='/saving' element={<Saving/>}/>
        <Route path='/finance' element={<FinanceReports/>} />
     </Routes>
    </div>
  );
}

export default App;
