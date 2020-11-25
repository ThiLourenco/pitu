import Routes from './routes';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add(faExclamationTriangle)

const App = () => <Routes />;

export default App;
