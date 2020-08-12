export function getXPosition(e) {
  if ('touches' in e) {
    return e.touches[0].clientX;
  } else if (!!e.clientX) {
    return e.clinetX;
  } else {
    return 0;
  }
}
