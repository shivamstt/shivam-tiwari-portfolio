import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            marginTop: 'var(--spacing-xl)',
            padding: 'var(--spacing-lg) 0',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--spacing-sm)',
            color: 'var(--text-secondary)',
            fontSize: '0.875rem'
        }}>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Shivam Tiwari</p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                <a href="https://www.linkedin.com/in/shivamtiwari-i/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:shivam.tiwarri@gmail.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;
