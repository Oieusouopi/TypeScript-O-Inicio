enum StudentStatus {
    Active = 1,
    Inactive,
    Paused
};

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1