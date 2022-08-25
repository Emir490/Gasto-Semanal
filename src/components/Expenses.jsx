import { useEffect, useState } from "react";
import useList from "../hooks/useList";
import Alert from "./Alert";

const Expenses = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const { updatingRest, saveExpense, restHTML} = useList();

  const [alert, setAlert] = useState({});

  useEffect(() => {
    if (restHTML <= 0) {
      setAlert({
        msg: "Presupuesto Agotado",
        error: true,
      })
      return;
    }
  }, [restHTML])

  const handleSubmit = e => {
    e.preventDefault();

    if ([expense, amount].includes('')) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      })
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      setAlert({
        msg: "Introduce una cantidad válida",
        error: true,
      })
      return;
    }

    if (restHTML <= 0) {
      return;
    }

    saveExpense({
      expense,
      amount,
      id: Date.now()
    });
    updatingRest(Number(amount));

    setAlert({ msg: "Agregado Correctamente" });
    setExpense("");
    setAmount("");
  }
  const { msg } = alert;
  return (
    <>
      <h2 className="text-blue-800 font-bold text-center text-xl mb-7">
        Añade tus gastos aquí
      </h2>

      {msg && <Alert alert={alert} />}
      

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="expense" className="text-lg text-gray-700">
            Gasto:
          </label>
          <input
            type="text"
            placeholder="Nombre Gasto"
            name="expense"
            className="border-2 w-full my-2 placeholder-gray-400 rounded-lg py-1.5 px-2"
            value={expense}
            onChange={e => setExpense(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-lg text-gray-700">
            Cantidad:
          </label>
          <input
            type="text"
            placeholder="Cantidad en $"
            name="amount"
            className="border-2 w-full my-2 placeholder-gray-400 rounded-lg py-1.5 px-2"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Agregar"
          disabled={restHTML < 0 ? true : false}
          className="bg-indigo-700 text-white w-full py-2 rounded-lg font-bold mt-2.5 hover:bg-indigo-900 cursor-pointer transition-colors md:w-2/6 "
        />
      </form>
    </>
  );
};

export default Expenses;
