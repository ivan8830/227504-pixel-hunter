export const initialState = {
  time: 0,
  lives: 3
};

export const screen = {
  'intro': {
    title: `*`,
    text: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
  },
  'greeting': {
    title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
    text: `Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>`
  },
  'rules': {
    title: `Правила`,
    text: `Угадай 10 раз для каждого изображения фото 
      <img src="img/photo_icon.png" width="16" height="16"> или рисунок 
      <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.`
  }
};