function getImportance(employees, id){
    const employeeMap = {}
    for(const emp of employees){
        employeeMap[emp[0]] = {
            'importance': emp[1],
            'subordinates': emp[2]
        }
    }
    console.log(employeeMap)
    function dfs(empId){
        const employee = employeeMap[empId]
        let total = employee.importance

        // add importance of all subordinates
        for(const subId of employee.subordinates){
            total += dfs(subId)
        }
        return total
    }

    return dfs(id)

}

// Test case
const employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1
console.log(getImportance(employees, 1)); // Output: -3


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Logs 3, 3, 3
}
// Fix: use let

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Logs 0, 1, 2
}
// Fix: use let