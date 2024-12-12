const clearDom = () => {
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#store-container').innerHTML = '';
  document.querySelector('#view-container').innerHTML = '';
  document.querySelector('#itemCard-container').innerHTML = '';
};

export default clearDom;
