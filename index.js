// Good luck!
const express = require('express')
const app = express()

const apComputerScienceA = {
    units: [
        {
            unitName: "Unit 1: Primitive Types",
            vocab: ["variable", "primitive", "data type", "casting"],
            definitions: [
                "A variable is a container for storing data values.",
                "Primitive types are the basic data types provided by Java, such as int, double, boolean, and char.",
                "A data type specifies the type of data a variable can hold, such as numbers or text.",
                "Casting is the process of converting a value from one data type to another."
            ],
            questions: [
                "What is a primitive data type?",
                "What is the purpose of casting?",
                "Name a primitive data type in Java."
            ],
            answers: [
                "A basic data type provided by the language such as int, double, or boolean.",
                "To convert a value from one data type to another.",
                "Examples include int, double, char, and boolean."
            ]
        },
        {
            unitName: "Unit 2: Using Objects",
            vocab: ["object", "class", "method", "constructor"],
            definitions: [
                "An object is an instance of a class that encapsulates data and behavior.",
                "A class is a blueprint for creating objects and defines their behavior and properties.",
                "A method is a function defined inside a class that performs a specific task.",
                "A constructor is a special method used to initialize objects."
            ],
            questions: [
                "What is an object in Java?",
                "What is the role of a constructor?",
                "How do you call a method in Java?"
            ],
            answers: [
                "An object is an instance of a class that encapsulates data and behavior.",
                "A constructor initializes the fields of an object when it is created.",
                "You call a method using the dot operator, e.g., objectName.methodName()."
            ]
        },
        {
            unitName: "Unit 3: Boolean Expressions and If Statements",
            vocab: ["boolean", "conditional", "logical operators", "comparison operators"],
            definitions: [
                "A boolean is a data type that can hold only two values: true or false.",
                "A conditional is a statement that controls the flow of execution based on a condition.",
                "Logical operators are used to combine or modify boolean expressions, e.g., &&, ||, !.",
                "Comparison operators are used to compare values, e.g., ==, !=, >, <, >=, <=."
            ],
            questions: [
                "What is a boolean expression?",
                "What does the '&&' operator mean?",
                "What is the purpose of an if statement?"
            ],
            answers: [
                "A boolean expression evaluates to true or false.",
                "The '&&' operator is the logical AND operator.",
                "An if statement is used to make decisions in the code based on a condition."
            ]
        },
        {
            unitName: "Unit 4: Iteration",
            vocab: ["loop", "for", "while", "iteration"],
            definitions: [
                "A loop is a control structure that repeats a block of code while a condition is true.",
                "A for loop is used to iterate a specific number of times.",
                "A while loop is used to repeat code as long as a condition remains true.",
                "Iteration refers to the process of repeating steps in a loop."
            ],
            questions: [
                "What is a loop?",
                "What is the difference between a for loop and a while loop?",
                "When would you use a while loop?"
            ],
            answers: [
                "A loop allows you to execute a block of code multiple times.",
                "A for loop is used when the number of iterations is known, while a while loop is used when the condition depends on runtime.",
                "Use a while loop when the number of iterations is unknown and depends on a condition."
            ]
        },
        {
            unitName: "Unit 5: Writing Classes",
            vocab: ["class", "field", "method", "encapsulation"],
            definitions: [
                "A class is a blueprint for creating objects and defines their behavior and properties.",
                "A field is a variable defined in a class that holds data.",
                "A method is a function defined inside a class that performs a specific task.",
                "Encapsulation is the bundling of data and methods that operate on that data."
            ],
            questions: [
                "What is encapsulation?",
                "What is a field in a class?",
                "How do you define a method in a class?"
            ],
            answers: [
                "Encapsulation is the bundling of data and methods that operate on that data.",
                "A field is a variable defined in a class that holds data.",
                "You define a method by specifying its return type, name, and parameters, e.g., public int add(int x, int y)."
            ]
        },
        {
            unitName: "Unit 6: Array",
            vocab: ["array", "index", "length", "element"],
            definitions: [
                "An array is a data structure that holds a fixed number of elements of the same type.",
                "An index is the position of an element in an array, starting from 0.",
                "The length of an array is the number of elements it can hold.",
                "An element is a single item in an array."
            ],
            questions: [
                "What is an array in Java?",
                "How do you access an element in an array?",
                "How do you determine the length of an array?"
            ],
            answers: [
                "An array is a data structure that holds a fixed number of elements of the same type.",
                "You access an element using its index, e.g., array[index].",
                "You use the length property, e.g., array.length."
            ]
        },
        {
            unitName: "Unit 7: ArrayList",
            vocab: ["ArrayList", "size", "add", "remove"],
            definitions: [
                "An ArrayList is a resizable array-like data structure in Java.",
                "The size of an ArrayList is the number of elements it contains.",
                "The add method is used to insert an element into an ArrayList.",
                "The remove method is used to delete an element from an ArrayList."
            ],
            questions: [
                "What is an ArrayList in Java?",
                "How do you add an element to an ArrayList?",
                "How do you remove an element from an ArrayList?"
            ],
            answers: [
                "An ArrayList is a resizable array-like data structure in Java.",
                "You use the add method, e.g., arrayList.add(element).",
                "You use the remove method, e.g., arrayList.remove(index)."
            ]
        },
        {
            unitName: "Unit 8: Inheritance",
            vocab: ["inheritance", "superclass", "subclass", "override"],
            definitions: [
                "Inheritance allows one class to inherit fields and methods from another class.",
                "A superclass is the parent class from which a subclass inherits.",
                "A subclass is a class that inherits from another class.",
                "Overriding is redefining a method in a subclass that exists in the superclass."
            ],
            questions: [
                "What is inheritance in Java?",
                "What is a superclass?",
                "How do you override a method in a subclass?"
            ],
            answers: [
                "Inheritance allows one class to inherit fields and methods from another class.",
                "A superclass is the parent class from which a subclass inherits.",
                "You use the @Override annotation and define the method in the subclass."
            ]
        }
    ]
};
app.use((req,res,next)=>{
    console.log(req.method + "/" + req.url) 
    next()
 })

 app.get("/", (req, res) => {
    res.status(200).send(`<h1>Welcome to the APCSA Study Guide API</h1> <h3>This works by having different paths in the url that activate different parts of the study guide go to /Docs to see all the different paths that can be implemented in the URL </h3><img src="https://img.freepik.com/free-vector/colorful-welcome-composition-with-origami-style_23-2147919827.jpg" alt="Welcome Image">`)
})
app.get("/Docs", (req, res) => {
    res.status(200).send("<h1>Welcome to the APCSA Study Guide API Document</h1><ul><li>/unit/:unitNum</li><li>/unit/:unitNum/answers</li><li>/unit/vocab/:unitNum?word=vocab</li></ul>")
})
app.get("/unit/:unitNum", (req, res) => {
    let i = req.params.unitNum
    res.status(200).send(`<h1>${apComputerScienceA.units[i-1].unitName}</h1>  <h3>these are some vocab words that can help you with the unit:  ${apComputerScienceA.units[i-1].vocab}</h3><h3>If you need the definitions of the vocab words put the path as /unitnNum/:vocabWord</h3> <h3> Here are some of the questions that you can use in order to be able to get through the unit:</h3><ul><li>${apComputerScienceA.units[i-1].questions[0]}</li><li>${apComputerScienceA.units[i-1].questions[1]}</li><li>${apComputerScienceA.units[i-1].questions[2]}</li></ul><h3> You should answer the questions on separate worksheet when finished go to /unit/unitNum/answers </h3>` )
})
app.get("/unit/:unitNum/answers", (req, res) => {
    let i = req.params.unitNum;
    res.status(200).send(`<h1>The answers to the previous questions: </h1><ul><li>${apComputerScienceA.units[i-1].answers[0]}</li><li>${apComputerScienceA.units[i-1].answers[1]}</li><li>${apComputerScienceA.units[i-1].answers[2]}</li></ul>`)
})
app.use("/unit/vocab/:unitNum", (req, res) => {
    let i = req.params.unitNum;
    let word = req.query.word.toLowerCase();
    for(let x = 0; x<4;x++){
        if(apComputerScienceA.units[i-1].vocab[x] == word){
            res.status(200).send(apComputerScienceA.units[i-1].definitions[x]);
        }else{
            res.send("Word not found")
        }
    }

})



 app.use((req,res,next)=>{
    res.status(404).send("Not found")
})

app.listen(3000, () => {
    console.log("Server running")
})