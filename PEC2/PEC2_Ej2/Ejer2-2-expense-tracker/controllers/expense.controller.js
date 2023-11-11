export default ExpenseController;


class ExpenseController {
    constructor(service, view){
        this.view = view;
        this.service = service;

        this.service.bindExpensesListChanged(this.onExpenseListChanged);
        this.view.bindAddExpense(this.handleAddExpense);
        this.view.bindDeleteExpense(this.handleDeleteExpense);

        this.onExpenseListChanged(this.service.expenses);
    }

    onExpenseListChanged = expenses => {
        this.view.displayExpenses(expenses);
    };

    handleAddExpense = (expenseText, expenseAmount) => {
        this.service.addExpense(expenseText, expenseAmount);
    };

    handleDeleteExpense = id => {
        this.service.deleteExpense(id);
    }

    updateExpense(_id, newText, newAmount) {
        this.expenseService.updateExpense(_id, newText, newAmount); //Actualizar el gasto 
      }
    
    

    init() { 
        this.onExpenseListChanged(this.model.expenses);
    }
}



  

