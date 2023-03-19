let users = [
    {firstName: "Marc", lastName: "Lipe"},
    {firstName: "Mad", lastName: "Thi"},
    {firstName: "Miq", lastName: "Luan"}    
]

const usersFullName = users.map(function(element, index) {
    return `${index}-${element.firstName} ${element.lastName}`;
})

console.log(usersFullName)