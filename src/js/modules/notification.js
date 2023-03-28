const notification = () => {

  const notification = [
    `В новорічні свята знижка 10% на продукцію від торгової марки Pinka`,
    `В новорічні свята знижка 20% на продукцію від торгової марки Pinka`,
    `В новорічні свята знижка 30% на продукцію від торгової марки Pinka`,
  ];

  const notificationItem = document.querySelector('[data-notification]');
  const btnCloseNotification = document.querySelector('[data-close-notification]');
  const containerNotification = document.querySelector('.bottom-header__notification');

  if (notification.length > 0) {
    notificationItem.innerText = notification[0];
    btnCloseNotification.addEventListener('click', () => notificationDel(containerNotification, timerId));
    let index = 1;
    let timerId = setInterval(() => {
      notificationItem.innerText = notification[index];
      index = (index == notification.length - 1 ? 0 : index + 1);
      btnCloseNotification.addEventListener('click', () => notificationDel(containerNotification, timerId));
    }, 10000);
  }


  function notificationDel(containerNotification, timerId) {
    clearInterval(timerId);
    containerNotification.remove();
  }

};

export default notification;