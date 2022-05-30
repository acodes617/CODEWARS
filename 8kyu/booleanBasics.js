function trueOrFalse(val) {
  if (val == false) {
    return "false";
  } else if (val == 0) {
    return "false";
  } else if (val == -0) {
    return "false";
  } else if (val == "") {
    return "false";
  } else if (val == null) {
    return "false";
  } else if (val == undefined) {
    return "false";
  } else if (val == NaN) {
    return "false";
  } else {
    return "true";
  }
}
