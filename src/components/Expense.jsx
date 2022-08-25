import useList from "../hooks/useList";

const Expense = ({expense}) => {

  const { deleteExpense } = useList();

  return (
    <div className="flex justify-around border p-2.5 rounded-md border-neutral-300 ">
        <p className="text-neutral-700 font-bold">{expense.expense}</p>
        <p className="text-white bg-blue-500 font-bold rounded-md py-0.5 px-1">
            $ {expense.amount}
        </p>
        <button className="bg-red-500 text-white py-0.5 px-2 rounded-md font-bold hover:bg-red-700 color-transition cursor-pointer" onClick={() => deleteExpense(expense.id)}>
            Borrar
        </button>
    </div>
  )
}

export default Expense