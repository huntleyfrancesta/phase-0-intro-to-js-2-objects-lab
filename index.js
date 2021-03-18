const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
    city: 'New York',
    state: 'NY',
    zip: '10004'
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const nextEmployee = {...obj };

    nextEmployee[key] = value;
    return nextEmployee;
}
/*const employee1 = updateEmployeeWithKeyAndValue(employee,'name', 'Sam');
console.log(employee1);
console.log(nextEmployee);*/

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
/*const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'jessica howard');
console.log(employee2);
console.log(employee);*/

function deleteFromEmployeeByKey(obj, key) {
    const employee3 = {...obj }
    delete employee3[key];
    return employee3;
}
/*const employee3 = deleteFromEmployeeByKey(employee1, 'zip');
console.log(employee3);
console.log(employee1);*/

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}
/*destructivelyDeleteFromEmployeeByKey(employee1, 'zip');
console.log(employee1);*/