import { createContext, useState } from "react";

const ListContext = createContext();

export const ListProvider = ({children}) => {
    const [rest, setRest] = useState(0);
    const [list, setList] = useState([]);
    const [restHTML, setRestHTML] = useState(1);

    const updatingRest = (amount) => {
        setRest(rest + amount);
    }

    const saveExpense = expense => {
        list.push(expense)
    }

    const deleteExpense = id => {
        const prove = confirm("¿Deseas eliminar este gasto?")

        if(prove) {
            let restUpdate = 0;
            const updateList = list.filter(expense => expense.id !== id);
            setList(updateList);

            updateList.map(expense => {
                restUpdate += Number(expense.amount);
            })

            setRest(restUpdate);
        }
    }

    return (
        <ListContext.Provider value={{
            rest, 
            setRest,
            restHTML,
            setRestHTML,
            updatingRest,
            list, 
            setList,
            saveExpense,
            deleteExpense,
        }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListContext;