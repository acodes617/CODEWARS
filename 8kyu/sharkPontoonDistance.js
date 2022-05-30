function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    sharkSpeed /= 2;
  }
  if (pontoonDistance / youSpeed < sharkDistance / sharkSpeed) {
    return "Alive!";
  } else if (pontoonDistance / youSpeed > sharkDistance / sharkSpeed) {
    return "Shark Bait!";
  }
}

//another solution with better readibility!!

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let shTime = sharkDistance / sharkSpeed;
  let youTime = pontoonDistance / youSpeed;
  if (dolphin == true) {
    shTime = shTime * 2;
  }
  if (youTime < shTime) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
}
