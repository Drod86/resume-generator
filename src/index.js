import { createRoot } from 'react-dom';
import { App } from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />)