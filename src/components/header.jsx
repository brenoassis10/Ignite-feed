import styles from './header.module.css'

import igniteLogo from '../image/ignite-logo.svg.svg';


export function Header() {
    return (
        <header className={styles.header}>
            
            <img src={igniteLogo} alt="Logotipo do Ignite"></img>
            <div id="title-div">
                <h1 id="title"  translate="no">Ignite Feed</h1>
            </div>
            
        </header>
    );
}