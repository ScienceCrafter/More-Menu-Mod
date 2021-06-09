window.snake.speeds = function() {

  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;

      if(code.indexOf('#A2') === -1)
        return;

      let img = new Image;
      img.src = 'https://i.postimg.cc/vHkC7G39/snai.png';
      img.width = 47;
      img.height = 47;
      img.class = 'DqMRee SsAred';
      document.querySelector('#speed').appendChild(img);

      img = new Image;
      img.src = 'https://i.postimg.cc/9Q9KJsnk/bolt.png';
      img.width = 47;
      img.height = 47;
      img.class = 'DqMRee SsAred';
      document.querySelector('#speed').appendChild(img);

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 1:return\.66[^}]*?1}}/
        )[0].replace(
          '1.33;',
          '1.33;case 3:return 1.85;case 4:return 0.45;'
        )
      );
    };
    req.send();
  }
};