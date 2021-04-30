document.addEventListener("DOMContentLoaded", function(){



//---------------------------------------------------Editing Data---------------------------------------------------//


//Grabing table with id
var MyTable = document.getElementById("MyTable");

MyTable.addEventListener("click", (e)=>{
    if(e.target.className=="edit"){
            
            var raw = e.target.parentNode.parentNode;                 // Grabing a row
            var oldVal = [];                                          // Creating array to store a value to be edited  
            var EditBox = [];                                         // Creating array to store new textboxes                  
            for(var x=0; x<=2; x++){
                oldVal[x] = raw.cells[x].innerText;                     
                raw.cells[x].innerText="";                            //Storing old values
                EditBox[x] = document.createElement("input");         //creating textboxes
                EditBox[x].setAttribute("type","text");                 
                raw.cells[x].appendChild(EditBox[x]);                 //Appendig texboxes to row cells  
                EditBox[x].value=oldVal[x];                           //Putting value into textboxes  
            }
        }
});


//---------------------------------------------------Saving Data---------------------------------------------------//



    MyTable.addEventListener("click", (e)=>{
        if(e.target.className=="save"){
        var raw = e.target.parentNode.parentNode;                           // Grabing a row        
            for(var x = 0; x < 3; x++){    
                var EditBoxes = raw.cells[x].firstChild;              
                var newVal = [];
                 newVal = EditBoxes.value;                           //taking new value from textboxes
               
              raw.cells[x].removeChild(EditBoxes);                  //removing textboxes
              raw.cells[x].innerText= newVal;                       // assigning new value to row cells
            }
        }
    
    })


 

//---------------------------------------------------Deleting Data---------------------------------------------------//



    MyTable.addEventListener("click", (e)=>{
        if(e.target.className == "delete"){
            var raw = e.target.parentElement.parentNode;
           raw.parentNode.removeChild(raw);
        }
    })


//---------------------------------------------------Adding New Row---------------------------------------------------//

var addARow = document.getElementById("addRow");

addARow.addEventListener("submit", (e) => {

   e.preventDefault();
    // creating new TD
    var NewNameBox = document.createElement("td");
    var NewAgeBox = document.createElement("td");
    var NewCountryBox = document.createElement("td");
    var NewButtonBox = document.createElement("td");

    // Accessing new value from Box
    var NewName = document.getElementById("NameBox").value;
    var NewAge = document.getElementById("AgeBox").value;
    var NewCountry = document.getElementById("CountryBox").value;
    
    
    //Creating new buttons 
    
    var ButtonEdit = document.createElement("button");
    var ButtonSave = document.createElement("button");
    var ButtonDelete = document.createElement("button");
    
    ButtonEdit.innerText='Edit';
    ButtonSave.innerText='Save';
    ButtonDelete.innerText='Delete';
    
    ButtonEdit.className="edit";
    ButtonSave.setAttribute("class","save");
    ButtonDelete.setAttribute("class","delete")
    
    
    //Appendinig buttons to Table data
    
    NewButtonBox.appendChild(ButtonEdit);
    NewButtonBox.appendChild(ButtonSave);
    NewButtonBox.appendChild(ButtonDelete);
    
    
    // Assigning text value to TD
    NewNameBox.textContent = NewName;
    NewAgeBox.textContent = NewAge;
    NewCountryBox.textContent = NewCountry;
    
    // Creating Row
    var NewRaw = document.createElement("tr");
    
    // Appending TD to Row
    NewRaw.appendChild(NewNameBox);
    NewRaw.appendChild(NewCountryBox);
    NewRaw.appendChild(NewAgeBox);
    NewRaw.appendChild(NewButtonBox);
    
    // inserting new raw in table
   
    var addData = document.getElementById("addData");
    MyTable.insertBefore(NewRaw, MyTable.previousElementSibling )
    document.getElementById("NameBox").value="";
    document.getElementById("CountryBox").value="";
    document.getElementById("AgeBox").value="";
});
})
