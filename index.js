const employee = {
    name: "Sam",
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
      };
    }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee = {...employee}
     delete copyEmployee.name
     return copyEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee.name
     return employee
}