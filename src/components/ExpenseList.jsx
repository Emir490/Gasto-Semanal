import useList from "../hooks/useList";
import Expense from "./Expense";

const ExpenseList = () => {
  const { list } = useList();

  return (
    <>
      {list.length ? 
      (
        <>
          {list.map(expense => (
            <Expense
              key={expense.id}
              expense={expense}
            />
          ))}
        </>
      ) :
      (
        <>
          <p className="mb-5 text-center text-indigo-600">Aquí aparecerán los gastos que agregues</p>
        </>
      )}
    </>
  );
};

export default ExpenseList;