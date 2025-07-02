function isSameType(value1, value2) {
  // Convert to real numbers if possible
  let v1 = Number(value1);
  let v2 = Number(value2);

  // Check if both are NaN
  if (Number.isNaN(v1) && Number.isNaN(v2)) {
    return true;
  }

  // If both are not NaN, compare actual types
  if (typeof v1 === typeof v2 && !Number.isNaN(v1) && !Number.isNaN(v2)) {
    return true;
  }

  return false;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
