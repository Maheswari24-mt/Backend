
// //new today 12.45//
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const placesRoutes = require('./routes/places-routes');
// const usersRoutes = require('./routes/users-routes');
// const HttpError = require('./models/http-error');

// const app = express();

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//   next();
// });

// app.use('/api/places', placesRoutes);
// app.use('/api/users', usersRoutes);

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// });

// app.use((error, req, res, next) => {
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || 'An unknown error occurred!' });
// });
// mongoose
  
//   .connect(
//     'mongodb+srv://mahiee:MAHESS@cluster0.zl1vz.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0'
//     )
//   .then(() => {
//     app.listen(5000);
//   })
//   .catch(err => {
//     console.log(err);
    
//   });

// const fs = require('fs');
// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const placesRoutes = require('./routes/places-routes');
// const usersRoutes = require('./routes/users-routes');
// const HttpError = require('./models/http-error');

// const app = express();

// app.use(bodyParser.json());

// app.use('/uploads/images', express.static(path.join('uploads', 'images')));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//   next();
// });

// app.use('/api/places', placesRoutes);
// app.use('/api/users', usersRoutes);

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// });

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, err => {
//       console.log(err);
//     });
//   }
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || 'An unknown error occurred!' });
// });

// mongoose
//   .connect(
//     'mongodb+srv://mahiee:MAHESS@cluster0.zl1vz.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0'
//   )
//   .then(() => {
//     app.listen(5000);
//   })
//   .catch(err => {
//     console.log(err);
//   });



const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }

  if (res.headersSent) {
    return next(error);
  }

  // Handle Multer file size limit error
  if (error.code === 'LIMIT_FILE_SIZE') {
    return res.status(413).json({ message: 'File size too large!' });
  }

  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect(
    'mongodb+srv://mahiee:MAHESS@cluster0.zl1vz.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
