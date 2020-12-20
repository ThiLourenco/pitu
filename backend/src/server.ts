import app from './app';
import database from './database';

//database.sync({force: true});
database.sync();
console.log('Database running on 5432');

app.listen(3001, () => console.log('Server running on port: 3001'));