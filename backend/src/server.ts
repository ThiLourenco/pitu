import app from './app';
import database from './database';
  
const PORT = process.env.PORT || 3001

database
  .sync({force: false})
  .then(() => 'Database connected')
  .catch((err) => console.log(`Error to connecting to the database ${err}`));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));