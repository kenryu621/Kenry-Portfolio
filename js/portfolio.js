function changePosition() {
  let offPosition = window.pageYOffset;
  if (document.getElementsByClassName('websiteShot')[0].id == 'interestShot') {
    offPosition = offPosition + 200;
  };
  document.getElementsByClassName('websiteShot')[0].setAttribute('style', 'background-position-y: -' + offPosition + 'px');
}