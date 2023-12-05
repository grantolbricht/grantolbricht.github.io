let HR={
    "Employees":[{
    "Name" : "Sammy",
    "Department" : "Tech",
    "Designation" : "Manager",
    "Salary": 40000,
    "Raise-Eligible" : true,
    }, {
     "Name" : "Mary",
    "Department" : "Finance",
    "Designation" : "Trainee",
    "Salary": 18500,
    "Raise-Eligible" : true,
    }, {
     "Name" : "Bill",
    "Department" : "HR",
    "Designation" : "Executive",
    "Salary": 21200,
    "Raise-Eligible" : false,
    }
    ]
}

let company = {
    "companyInfo": [
        {
            "CompanyName" : "Tech Stars",
            "Website" : "www.techstars.site",
            "employees" : HR["Employees"],
        }
    ]
}
//Qiestion 1
console.log(HR["Employees"]);
//Question 2
console.log(HR["companyInfo"]);
//Question 3
HR["employees"].push(
    {"Name" : "Anna",
    "Department" : "Tech",
    "Designation" : "Executive",
    "Salary": 25000,
    "Raise-Eligible" : false
});

console.log(HR["employees"][3]);

//Question 4
let totalSalary = 0;
for (let i =0; i< HR["Employees"].length; i++) {
    totalSalary += HR["Employees"][i][Salary];
}
console.log(totalSalary);

//Question 5
function livingWage() {
    for (let i =0; i< HR["Employees"].length; i++) {
    if (HR["Employees"][i]["Raise-Eligible"]==true) {
        HR["Employees"][i]["Salary"] =  HR["Employees"][i]["Salary"]* 1.1;
        HR["Employees"][i]["Raise-Eligible"]= false;
    }
    }
}console.log(HR["Employees"]);
livingWage();

//Question 6
const wfh = ["Anna", "Sam"];
for (let i=0; i<HR["Employees"].length; i++) {
    if (wfh.includes(HR["Employees"][i]["name"]) ){
        HR["Employees"][i]["wfh"]= true;
    } else{
        HR["Employees"][i]["wfh"]= false;
    }
}
console.log(HR["Employees"])