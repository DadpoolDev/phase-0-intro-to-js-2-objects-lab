// Write your solution in this file!
const employee = {
    name: 'Sebastion Ramos',
    streetAddress: '767 Transylvania Ave'
}

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = {...employee};
    employee2.name = `Sam`;
    employee2.streetAddress = `11 Broadway`;
    return employee2;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = `12 Broadway`;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const {name, ...employee2} = employee;
  return employee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}