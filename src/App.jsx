import Expenses from "./components/Expenses";
import List from "./components/List";
import { ListProvider } from "./content/ListProvider";

function App() {
  let budget;
  do {
    budget = prompt("Ingresa tu presupuesto: ");
  } while (isNaN(budget) || budget === "" || budget === null || budget <= 0);

  return (
    <ListProvider>
      <div className="wrapper mx-5">
        <header className="my-10">
          <h1 className="text-center text-4xl text-white ">Gasto Semanal</h1>
        </header>
        <div className="bg-white p-10 md:grid grid-cols-2 gap-x-12 md:container mx-auto lg:w-3/5">
          <div>
            <Expenses />
          </div>
          <div className="p-2 mt-7">
            <List budget={budget}/>
          </div>
        </div>
      </div>
    </ListProvider>
  );
}

export default App;
