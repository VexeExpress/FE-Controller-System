import React from "react";
import Header from '../components/Header';
import Menu from '../components/Menu';

const MainLayout = ({ children }) => {
    return (
        <div style={styles.mainContainer}>
            <header style={styles.header}>
                <Header />
            </header>
            <div style={styles.contentContainer}>
                <aside style={styles.menu}>
                    <Menu />
                </aside>
                <main style={styles.mainContent}>
                    {children}
                </main>
            </div>
        </div>
    );
};

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    header: {
        height: '60px',
        backgroundColor: '#f5f5f5',
    },
    contentContainer: {
        display: 'flex',
        flex: 1,
    },
    menu: {
        width: '220px',
        backgroundColor: '#e0e0e0',
    },
    mainContent: {
        flex: 1,
        padding: '20px',
        backgroundColor: '#ffffff',
    },
};

export default MainLayout;
