import React from 'react';
import Terminal from './Terminal';

const metrics = [
    { value: '5+ yrs', label: 'designing and running cloud platforms' },
    { value: '750+', label: 'servers migrated to unified observability' },
    { value: '−35%', label: 'MTTD after the Datadog migration', good: true },
    { value: '92%', label: 'AWS Security Hub compliance, up from 65%', good: true }
];

const openPalette = () => window.dispatchEvent(new CustomEvent('cmdk:toggle'));

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shivam Tiwari',
    url: 'https://shivamtiwari.dev',
    jobTitle: 'Platform Engineer',
    description: 'Platform and DevOps engineer specializing in AWS, Terraform, and Kubernetes.',
    sameAs: [
        'https://www.linkedin.com/in/shivamtiwari-i/',
    ],
};

const Hero = () => {
    return (
        <section className="hero reveal" style={{ padding: 'var(--spacing-xl) 0 var(--spacing-lg)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            {/* Status line */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>shivam.tiwari</span>
                    <span className="glass" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '7px',
                        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                        color: 'var(--accent)',
                        padding: '4px 10px', borderRadius: '999px'
                    }}>
                        <span className="status-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }}></span>
                        all systems operational
                    </span>
                </div>
                <button
                    className="hero-cmd-btn glass"
                    onClick={openPalette}
                    style={{
                        cursor: 'pointer',
                        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                        color: 'var(--text-secondary)',
                        padding: '5px 10px', borderRadius: '6px'
                    }}
                    aria-label="Open command palette"
                >
                    ⌘K to navigate
                </button>
            </div>

            <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                color: 'var(--text-secondary)', marginBottom: 'var(--spacing-sm)'
            }}>
                Platform Engineer · cloud infrastructure · CI/CD · reliability
            </p>
            <h1 className="gradient-text" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5.5vw, 3.4rem)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em'
            }}>
                Shivam Tiwari
            </h1>
            <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                marginBottom: 'var(--spacing-lg)',
                lineHeight: 1.65
            }}>
                I design and run cloud platforms end to end — resilient AWS infrastructure,
                automated pipelines, and the observability to know it's actually working.
            </p>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', marginBottom: 'var(--spacing-lg)' }}>
                <a
                    href="https://www.linkedin.com/in/shivamtiwari-i/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500, borderBottom: '1px solid var(--accent)', paddingBottom: '1px' }}
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:shivam.tiwarri@gmail.com"
                    style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', borderBottom: '1px solid var(--text-secondary)', paddingBottom: '1px' }}
                >
                    Email
                </a>
            </div>

            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <Terminal />
            </div>

            {/* Metric strip */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 'var(--spacing-md)'
            }}>
                {metrics.map((m, i) => (
                    <div key={i} className="glass card-glow" style={{
                        borderRadius: '10px',
                        padding: 'var(--spacing-md)'
                    }}>
                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            color: m.good ? 'var(--accent)' : 'var(--text-primary)'
                        }}>
                            {m.value}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginTop: '4px' }}>
                            {m.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
