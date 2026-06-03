const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser');

const userRouter = require('./routers/userRoutes');
const blogRouter = require('./routers/blogRoutes');
const staticRouter = require('./routers/staticRouter');
const commentRouter = require('./routers/commentRoutes');

const { checkForToken } = require('./middlewares/auth');

const app = express();

//Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("MongoDB connection error:", err));


//Configurations
app.set("trust proxy", 1);
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//Middlewares
app.use(express.static(path.resolve('./public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//custom middlewares
app.use(checkForToken);


//Register Routes
app.use('/', staticRouter);
app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/comment', commentRouter);


//Listener

app.listen(8000, () => {
    console.log(`Server started at port 8000`);
})