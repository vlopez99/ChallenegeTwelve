const menuOptions

{
    {
        type:  'input',
        message: "What would you like to do?",
    },
    {
        type:  'input',
        message: "What is the name of the department?",
    },
    {
        type:  'input',
        message: "What would you like to do?",
    },
    {
        type:  'input',
        message: "What is the name of the roll?",
    },
    {
        type:  'input',
        message: "What is the salary of the role?",
    },
    {
        type:  'input',
        message: "Which department does the role belong to?",
    },
    {
        type:  'input',
        message: "What would you like to do?",
    },
    {
        type:  'input',
        message: "What is the employee's first name?",
    },
    {
        type:  'input',
        message: "What is the employee's last name?",
    },
    {
        type:  'input',
        message: "What is the employee's role?",
    },
    {
        type:  'input',
        message: "Who is the employee's manager?",
    },
    {
        type:  'input',
        message: "What would you like to do?",
    },
    {
        type:  'input',
        message: "Which employee's role do you want to update?",
    },

        .then((answers) => {
            if (answers.menu === "View All Departments") {
                viewDept();
            }   else if (answers.menu === "Add Department") {
                addDept();
            }   else if (answers.menu === "View All Employees") {
                viewEmp();
            }   else if (answers.menu === "Add an Employee") {
                addEmp();
            }
        });
}

function viewDept() {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        menuOptions();
    });
}

function viewEmp() {
    connection.query("SELECT * FROM employee", (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
        menuOptions();
    });
}