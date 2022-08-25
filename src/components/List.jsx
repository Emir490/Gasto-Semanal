import ExpenseList from "./ExpenseList";
import useList from "../hooks/useList";
import { useEffect } from "react";

const List = ({budget}) => {

  const { rest, restHTML, setRestHTML } = useList();

  useEffect(() => {
    setRestHTML(budget - rest);
  })

  return (
    <>
      <div className="bg-sky-200 py-3 px-5 text-blue-800 font-bold rounded-md">
        <p>
          Presupuesto: {""}
          <span className="text-neutral-700">${budget}</span>
        </p>
      </div>
      <div className="bg-green-200 py-3 px-5 text-blue-800 font-bold rounded-md mt-5">
        <p>
          Restante: {""}
          <span className="text-neutral-700">${restHTML < 0 ? 0 : restHTML}</span>
        </p>
      </div>
      <h2 className="mt-10 text-center text-xl text-indigo-700 font-bold mb-5">
        Listado
      </h2>
      <ExpenseList />
    </>
  );
};

export default List;
