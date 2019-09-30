/* TO-DO
* add event handler for click detection
* Get input from user
* add item to data structure */

// module handling budget calculations
var budgetController = (function (){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    
    Expense.prototype.calcPercentage = function(totalIncome, totalExpense){     
        if(totalIncome > 0 && totalIncome > totalExpense){
            this.percentage =Math.round(100* this.value / totalIncome);    
        }else{
            this.percentage = -1;
        }
    }
    
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };   
    
    var calculateTotal = function ( type){
        
        var sum = 0;
        
        data.allItems[type].forEach(function (cur){
           
            sum = sum + cur.value;
            
        });
        
        data.totals[type] = sum;
    };

    
    var data = {
        allItems: {
            exp : [],
            inc: [],
            
        },
        totals : {
            exp : 0,
            inc : 0
        },
        budget : 0,
        percentage : -1
    };
    
    return {
        addItem :function(type, des, val){
            var newItem, ID;
            
            //create new ID for new item
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            }else {
                ID =0;
            }
            
            
            //create new item
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            
            //push new item into data structure
            data.allItems[type].push(newItem);
            
            // return new element
            return newItem;
            
        },
        
        deleteItem: function(type, id){
            var ids, index;
            
            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            
            index = ids.indexOf(id);
            
            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },
        
        calculateBudget: function(){
          
            // calc total inc nd exp
            calculateTotal('exp');
            calculateTotal('inc');
            
            //calc budget : inc - exp
            
            data.budget = data.totals.inc - data.totals.exp;
            
            //calc % income spent
            if(data.totals.inc > 0 && data.totals.inc > data.totals.exp){
                data.percentage = Math.round(100 * (data.totals.exp / data.totals.inc));               
            }else {
                data.percentage = -1;
            }            
            
        },
        
        calculatePercentages:function(){
            
            
            data.allItems.exp.forEach(function(cur){
               cur.calcPercentage(data.totals.inc, data.totals.exp); 
            });
            
        },
        
        getPercentages: function(){
          var allPercentage = data.allItems.exp.map(function(cur){
             
            return cur.getPercentage();
              
          });  
            return allPercentage;
        },
        
        getBudget : function (){
          return {
              budget : data.budget,
              totalInc : data.totals.inc,
              totalExp: data.totals.exp,
              percentage: data.percentage
          }  
        },
        
        
        testing: function(){
            console.log(data)
        }
    };
    
})();




/// UI control module to interface and interact with users


var UIController = (function(){
    
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputButton : '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentage: '.budget__expenses--percentage',
        container : '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel:'.budget__title--month'
    }
    
                var nodeListForEach = function(list, callback){
                for(var i = 0; i < list.length; i++){
                    callback(list[i], i);
                }
            }
    
    return {
        getInput: function(){
            
            return {
                type : document.querySelector(DOMStrings.inputType).value, // will be either 'inc' or 'exp'
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMStrings.inputValue).value),
            }
        },
        
        addListItem: function(obj,type){
            var html, element, newHtml;
            //crete html w/ place holder
            
            if(type == 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      
            }else {
                element = DOMStrings.expensesContainer;
              html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';              
            }        

            
            //replace it ith actual data
            
            newHtml = html.replace('%id%', obj.id);
            
            newHtml = newHtml.replace('%description%', obj.description);
            
            newHtml = newHtml.replace('%value%', this.formatNumber(obj.value,type) );
            
            
            //insert html into DOM
            
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
        },
        
        deleteListItem: function(selectorID){
            
            var ele;
            ele = document.getElementById(selectorID);
          
            ele.parentNode.removeChild(ele);
        },
        
        
        clearFields: function(){
          
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function (current, index, array){
                current.value = '';
            });
            
            fieldsArr[0].focus();
            
        },
        
        displayBudget : function(obj){
            
            var type;
            obj.budget > 0 ? type = 'inc' : type='exp';
          
            document.querySelector(DOMStrings.budgetLabel).textContent = this.formatNumber(obj.budget,type);
            document.querySelector(DOMStrings.incomeLabel).textContent = this.formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = this.formatNumber( obj.totalExp,'exp');
            
            if(obj.percentage > 0){
                document.querySelector(DOMStrings.percentage).textContent = obj.percentage;
            }else{
                document.querySelector(DOMStrings.percentage).textContent = '---';
            }

        },
        
        displayPercentages : function(percentages){
          
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
            

            
            nodeListForEach(fields, function(current, index){
               
                if(percentages[index] > 0){
               
                    current.textContent =  percentages[index] + '%'; 
                    
                }else{
                   current.textContent =  '---';
                }
            });
        },
        
        displayMonth: function(){
          
            var now, year,month, months;
            
            now = new Date();
            
            months = ['jan','feb','mar','apr','jun','jul','aug','sep','oct','nov','dec']
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMStrings.dateLabel).textContent = months[month-1]+', '+year;
            
        },
        
        formatNumber:function(num,type){
            
            var int, dec, numSplit;
        
            num = Math.abs(num);
            num = num.toFixed(2);
            
            numSplit = num.split('.');
            int = numSplit[0];
            
            if(int.length > 3)
            {
                int = int.substr(0,int.length -3)+ ','+int.substr(int.length-3, 3);
            }
            
            dec = numSplit[1];
            
    
            return ((type ==='exp')? '-' : '+') + ' ' + int+'.'+dec;
        },
        
        changeType: function (){
          
            var fields = document.querySelectorAll(
            DOMStrings.inputType + ','+ DOMStrings.inputDescription+','+DOMStrings.inputValue
            );
            
            nodeListForEach(fields, function(cur){
                
                cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMStrings.inputButton).classList.toggle('red')
            
        },
        
        getDOMStrings: function(){
            return DOMStrings;
        }

    };
    
})();


///global control for the app, connect the UI and budget controllers

var Controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListeners = function(){
        
        var DOM = UICtrl.getDOMStrings();
        
    
        document.querySelector(DOM.inputButton).addEventListener('click', controlAddItem);
        
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                controlAddItem();
            }
        });  
        
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType)
        
    };
    
    var updateBudget = function(){
        
        //Calc budget
        budgetCtrl.calculateBudget();
        
        //return budget
        var budget = budgetCtrl.getBudget();
        
        //display budget on UI
        UICtrl.displayBudget(budget);
    };
    
    var updatePercentages= function(){
        
        //Calc percent
        budgetCtrl.calculatePercentages();
        
        //return percent
        var percentages = budgetCtrl.getPercentages();
        
        //display percent on UI
        UICtrl.displayPercentages(percentages);
        console.log(percentages)
        
    };
    
    var controlAddItem = function(){
        
        var input, newItem;
        /* When someone hits the button, do these:
         
        * add new item to UI 
        * calc budget *display budget
        */
        
        // * Get the ip data
        var input = UICtrl.getInput();
        
        
        if(input.description !== '' && !isNaN(input.value) && input.value > 0){
            // add item 
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
            UICtrl.addListItem(newItem, input.type);
        
            UICtrl.clearFields();
        
            updateBudget();
            updatePercentages();

        }

    };
    
    var ctrlDeleteItem= function(event){
      
        var itemID,splitID,type,id;
        itemID = (event.target.parentNode.parentNode.parentNode.parentNode.id); //traverse the tree up till the item
        
        if(itemID){
            
            splitID = itemID.split('-');
            type = splitID[0];
            id = parseInt(splitID[1]);
            
            
            //delete item from data struct
            budgetCtrl.deleteItem(type, id);
            
            //delete item from UI
            UICtrl.deleteListItem(itemID);
            
            //update and show new budget
            updateBudget();
            
            updatePercentages();
            
        }
    };
    
    
    return {
        init: function(){
            console.log('started');
            UICtrl.displayMonth();
            UICtrl.displayBudget({budget:0, totalExp:0,totalInc:0, percentage:0});
            setupEventListeners();
        }
    }

    

    
})(budgetController, UIController);


Controller.init();