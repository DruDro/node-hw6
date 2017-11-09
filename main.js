const imgs = document.getElementsByTagName('img'),
  firstImgSize = {
    width: imgs[0].clientWidth,
    height: imgs[0].clientHeight
  };
console.log(firstImgSize);
const dateNode = document.getElementById('date');
const timer = setInterval(function () {
  let date = new Date();
  const dateHTML = `<span>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</span><br><span>${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}</span>`;
  dateNode.innerHTML = dateHTML;
}, 1000);