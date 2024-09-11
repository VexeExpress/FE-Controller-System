import React from "react";
import Header from '../components/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={styles.mainContent}>
                {children}
            </main>
        </div>
    );
};
const styles = {
    mainContent: {
        minHeight: 'calc(100vh - 120px)',
        padding: '20px',
    },
};
export default Layout;