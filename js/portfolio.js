function changePosition() {
  var offPosition = window.pageYOffset;
  //if (document.getElementsByClassName('websiteShot')[0].id == 'interestShot') {
  //  offPosition = offPosition + 200;
  //}
  switch (document.getElementsByClassName('websiteShot')[0].id) {
    case 'interestShot':
      offPosition = offPosition + 200;
      break;
    case 'contactShot':
      offPosition = offPosition + 150;
      break;
  }
  document.getElementsByClassName('websiteShot')[0].setAttribute('style', 'background-position-y: -' + offPosition + 'px');
}