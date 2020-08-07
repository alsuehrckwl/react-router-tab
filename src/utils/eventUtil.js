export function getXPosition(e) {
  console.log(e.clinetX);
  console.log(e.touches);
  if ('touches' in e) {
    return e.touches[0].clientX;
  } else if (!!e.clientX) {
    return e.clinetX;
  } else {
    return 0;
  }
}
