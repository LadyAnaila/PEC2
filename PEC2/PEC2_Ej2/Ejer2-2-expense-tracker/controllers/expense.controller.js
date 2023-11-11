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

    init() { 
        this.onExpenseListChanged(this.model.expenses);
    }
}



  

