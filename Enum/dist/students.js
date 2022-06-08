var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
;
var newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1
