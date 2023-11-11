class ExpenseView {
    constructor() {
      // APP
      this.app = this.getElement("#root"); //Para que todo aparezca en el root del HTML 


/*********************
 * ELEMENTOS DEL DOM
**********************/
//Encabezado h2
      this.title = this.createElement("h2", "title");
      this.title.textContent = "ExpenseTracker";

//Entradas de texto para el formulario 
      this.inputText = this.createElement("input", "textExpense"); 
      this.inputText.type = "text";
      this.inputText.placeholder = "Add Text";
      this.inputText.name = "expense";

      // Entrada de cantidad 
      this.inputAmount = this.createElement("input", "amountExpense");
      this.inputAmount.type = "number";
      this.inputAmount.placeholder = "Add Amount";

      // Botón
      this.submitButton = this.createElement("button");
      this.submitButton.textContent = "Enter";

      // Lista
      this.listTittle = this.createElement("h3", "list-tittle"); //encabezado de la lista
      this.listTittle.textContent = "List of Expenses";
      // 
      this.expenseList = this.createElement("ul", "expense-list"); //Lista


//Formulario 
      this.form = this.createElement("Enter data");
      this.form.append(this.inputText, this.inputAmount, this.submitButton);
  
      this._initLocalListeners();
    }
  
/*********************
 * MÉTODOS GET
**********************/
    //para el texto del gasto
    get _expenseText() {
      return this.inputText.value;
    }
  
    //Para la cantidad
    get _expenseAmount() {
      return this.inputAmount.value;
    }
  
    //Para borrar
    _resetInput() {
      this.inputAmount.value = "";
      this.inputText.value = "";
    }
  

    createElement(tagName, className) {
      const element = document.createElement(tagName);
  
      if (className) element.classList.add(className);
  
      return element;
    }
  
    getElement(selector) {
      const element = document.querySelector(selector);
  
      return element;
    }
  
    displayExpenses(expenses) {

      // Borrar el elemento de la lista
      while (this.expenseList.firstChild) {
        this.expenseList.removeChild(this.expenseList.firstChild);
      }
  
        expenses.forEach(expense => {
          const li = this.createElement("li");
          li.id = expense.id;
  
          const spanText = this.createElement("span");
          spanText.textContent = "Text: " + expense.text;
  
          const spanAmount = this.createElement("span");
          spanAmount.textContent = expense.amount;
  
          //Botón para borrar el elemento 
          const deleteButton = this.createElement("button", "delete-btn");
          deleteButton.innerText = "delete expense";
  
          li.append(spanText, spanAmount, deleteButton);
          this.expenseList.append(li);
        });
      }
      
      
    _initLocalListeners() {}



    bindAddExpense(handler) {
      this.form.addEventListener("submit", event => {
        event.preventDefault();
//Comprobamos que la cantidad entrada sea un número válido 
        const expenseAmount = parseFloat(this._expenseAmount);
        if (!isNaN(expenseAmount) && this._expenseText.trim() !== "") {
          handler(this._expenseText, expenseAmount);
          this._resetInput();
        } else {
          alert("Not a valid number.");
        }
      });
    }
      
    bindDeleteExpense(handler) {
      this.expenseList.addEventListener("click", event => {
        const id = event.target.parentElement.id;
        handler(id);
      });
    }
  }
  