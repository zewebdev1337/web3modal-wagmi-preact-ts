import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import { Web3ModalProvider } from './context/Web3Modal.tsx'

render(
    <Web3ModalProvider>
        <App />
    </Web3ModalProvider>, document.getElementById('app')!)
