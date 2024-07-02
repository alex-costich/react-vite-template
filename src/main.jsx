import { createRoot } from 'react-dom'
import './index.css'

const app = <img src='react.svg' />
console.log(app)
const container = document.getElementById('root')

createRoot(container).render(app)
