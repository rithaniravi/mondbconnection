// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './database';

// dotenv.config();
 
// const app = express();
// const PORT = process.env.PORT || 3000;

// connectDB();

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './database';
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
connectToDatabase();
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/graphql`);
});

export default connectToDatabase;
