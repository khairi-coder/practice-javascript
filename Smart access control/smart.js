let age = 20;
let hasStudentId = true;
let labIsOpen = true;
let hasPermission = false;

function canEnterLab(age, hasStudentId, labIsOpen, hasPermission) {
  if (age >= 18 && hasStudentId && labIsOpen) {
    return "Allowed to enter lab";
  } else if (!labIsOpen) {
    return "Lab is closed";
  } else if ((age >= 18 && hasStudentId) || hasPermission) {
    return "Allowed In";
  } else {
    return "Not allowed in";
  }
}
console.log(canEnterLab(age, hasStudentId, labIsOpen, hasPermission));

age = 13;
hasStudentId = false;
console.log(canEnterLab(age, hasStudentId, labIsOpen, hasPermission));

age = 10;
labIsOpen = true;
hasPermission = true;
console.log(canEnterLab(age, hasStudentId, labIsOpen, hasPermission));

age = 10;
labIsOpen = false;
hasPermission = true;
console.log(canEnterLab(age, hasStudentId, labIsOpen, hasPermission));
