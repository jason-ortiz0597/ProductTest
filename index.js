import connectDB from './src/connections/database.js';
import express from 'express';
import morgan from 'morgan';
import unitRoutes from './src/routes/unitMensureRoutes.js';
import provaiderRoutes from './src/routes/provaiderRoutes.js';
import statuRoutes from './src/routes/statuRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import productRoutes from './src/routes/productRoutes.js';


connectDB();
const app = express();



app.use(morgan('dev'));
app.use(express.json());


app.use('/unit', unitRoutes);
app.use('/provaider', provaiderRoutes);
app.use('/statu', statuRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);



app.listen (3000, () => {
    console.log('Server is running on port 3000');
});