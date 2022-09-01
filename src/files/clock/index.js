
  const el = document.querySelector('.clock');
  setInterval(() => {
    const date = new Date();
    el.innerHTML = date.toLocaleString('zh-cn');
  }, 1000);
