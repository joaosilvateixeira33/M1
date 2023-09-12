const departmentList = [
    {
        departmentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]

function howManyDepartments() {
    return departmentList.length
}
console.log(`Quantidade de departamentos: ${howManyDepartments()}`);

function changeDepartmentName(currentName, newName) {
    for (let d = 0; d < departmentList.length; d++) {
        if (departmentList[d].departmentName === currentName) {
            departmentList[d].departmentName = newName;
            return departmentList[d];
        }
    }

    return "Department not found.";
}
console.log(changeDepartmentName('Capitation', 'captação'));

function giveTheDepartmentABreak() {
    for (let d = 0; d < departmentList.length; d++) {
        if (departmentList[d].working) {
            departmentList[d].working = !departmentList[d].working;
            return departmentList[d].working;
        }
    }

    return null;
}
console.log(giveTheDepartmentABreak());

function howManyEmployeesInDepartment(departmentName){
    for (let d = 0; d < departmentList.length; d++){
        if(departmentList[d].departmentName === departmentName){
            return departmentList[d].employees.length
        }
    }

    return "Department not found."
}
console.log(howManyEmployeesInDepartment('Financial'));

function insertNewEmployeeInDepartment(departmentName, employee){
    const department =  departmentList.find(department => department.departmentName === departmentName);
    if(department){
        department.employees.push(employee);
        return "Employee added to department successfully";
    }else{
        return "Department not found";
    }
}

const employee ={
    name:'Rosemary',
    age:44,
    responsibility: 'Financial expedition director',
    salary: 15600
}

console.log(insertNewEmployeeInDepartment('Financial', employee));