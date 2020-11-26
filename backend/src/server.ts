import app from './app';
import database from './database';

database.sync({force: true});
console.log('Database running on 3306');

app.listen(3001, () => console.log('Server running on port: 3001'));