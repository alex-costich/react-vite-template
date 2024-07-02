import { createRoot } from 'react-dom'
import './index.css'

const app = <img src='logo.svg' />
const container = document.getElementById('root')

createRoot(container).render(app)
