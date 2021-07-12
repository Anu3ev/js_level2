const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  fs = require('fs');

app.use(bodyParser.json());
app.use(express.static('.'));

// Заводим пустой объект для записи действий пакупателя, переменную для записи даты, и переменную для итоговой цены товаров
let action = {},
  now,
  totalPrice;

// Функция для перерасчёта общей стоимости товаров в корзине
function calculateItems(items) {
  totalPrice = 0;
  items.forEach((cartItem) => {
    // Считаем стоимость каждой отдельной позиции с привязкой к количеству
    cartItem.cartPrice = cartItem.salePrice * cartItem.count;

    // Считаем стоимость всех товаров в корзине
    totalPrice += cartItem.salePrice * cartItem.count;
  })
}

// Получение списка товаров каталога
app.get('/catalogData', (req, res) => {
  fs.readFile('./products/data.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

// Получение списка товаров корзины
app.get('/cartItems', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    if (!err) {
      const cart = JSON.parse(data);

      calculateItems(cart);

      fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
        if (!err) {
          res.send(cart);
        } else {
          res.send('{"result": 0}');
        }
      });
    }
  });
});

// Добавление товара в корзину
app.post('/addToCart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    if (!err) {
      const cart = JSON.parse(data);

      const cartItem = req.body;

      if (!cart.some((item) => cartItem.id === item.id)) {
        cart.push(cartItem);
        action = {
          'name': 'Товар добавлен в корзину',
          'productName': cartItem.title,
          'time': now
        }
        now = new Date();
        calculateItems(cart);
      } else {
        cart.forEach((item, i) => {
          if (cartItem.id === item.id) {
            if (cartItem.mathOperation === 'plus') {
              ++item.count;
              action = {
                'name': 'Увеличено количество товара в корзине',
                'productName': cartItem.title,
                'time': now
              }
              now = new Date();
            } else {
              --item.count;
              action = {
                'name': 'Уменьшено количество товара в корзине',
                'productName': cartItem.title,
                'time': now
              }
              now = new Date();
            }
          }
          calculateItems(cart);
        });
      }

      // Записываем действия покупателя в файл stats.json
      fs.readFile('stats.json', 'utf8', (err, data) => {
        if (!err) {
          const stats = JSON.parse(data);
          stats.push(action);
          fs.writeFile('stats.json', JSON.stringify(stats), (err) => {});
        }
      });

      fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
        if (!err) {
          res.send(cart);
        } else {
          res.send('{"result": 0}');
        }
      });
    } else {
      res.send('{"result": 0}');
    }
  });
});

// Удаление товара из корзины
app.post('/removeItem', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    const cart = JSON.parse(data);

    const cartItem = req.body;

    cart.forEach((item, i) => {
      if (cartItem.id === item.id) {
        cart.splice(i, 1);
        action = {
          'name': 'Товар удалён из корзины',
          'productName': cartItem.title,
          'time': now
        }
        now = new Date();
      }
    });

    calculateItems(cart);

    // Записываем действия покупателя в файл stats.json
    fs.readFile('stats.json', 'utf8', (err, data) => {
      const stats = JSON.parse(data);
      stats.push(action);
      fs.writeFile('stats.json', JSON.stringify(stats), (err) => {})
    });

    fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
      if (!err) {
        res.send(cart);
      } else {
        res.send('{"result": 0}');
      }
    });
  });
});

app.get('/totalPrice', (req, res) => {
  fs.readFile('totalPrice.json', 'utf8', (err, data) => {
    const total = JSON.parse(data);
    total[0] = totalPrice;
    fs.writeFile('totalPrice.json', JSON.stringify(total), (err) => {
      if (!err) {
        res.send(total);
      } else {
        res.send('{"result": 0}');
      }
    });
  });
});

app.listen(5500, () => {
  console.log('Express server started on port 5500');
});