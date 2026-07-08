import React from 'react';
import Hero from '../components/Hero';
import Systems from '../components/Systems';

const SectionDivider = () => (
    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: 'var(--spacing-xl) 0 0' }} />
);

const SectionLabel = ({ children }) => (
    <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)',
        marginBottom: 'var(--spacing-lg)',
        marginTop: 'var(--spacing-lg)'
    }}>
        <span style={{ color: 'var(--accent-2)' }}>// </span>{children}
    </p>
);

const SkillTag = ({ children }) => (
    <span style={{
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border)',
        padding: '4px 10px',
        borderRadius: '4px',
        display: 'inline-block'
    }}>
        {children}
    </span>
);

const experience = [
    {
        company: 'ClearRoute',
        role: 'Quality Cloud Engineer',
        period: 'Nov 2023 – Present',
        hash: 'f3a91c2',
        location: 'Remote, Pune',
        highlights: [
            'Led migration of the observability platform from AppDynamics to Datadog across 750+ servers, reducing MTTD by 35% and cutting monitoring costs by 20%.',
            'Partnered with security teams to remediate high-priority AWS Security Hub findings, raising compliance posture from 65% to 92% within three months.',
            'Implemented an enterprise-wide CI/CD strategy across Jenkins, GitLab CI/CD, and Bitbucket Pipelines, cutting release cycle times by 40%.',
            'Led containerization of legacy applications with Docker and migration to EKS, tuning HPA and pod disruption budgets to cut deployment failures by 30% and enable zero-downtime blue/green deployments.',
            'Designed and rolled out reusable Terraform modules across AWS accounts to standardize provisioning, reducing deployment errors by 50% and cutting environment spin-up time from days to hours.',
            'Orchestrated disaster recovery experiments with AWS Fault Injection Service, simulating multi-AZ and node-level failures to surface and remediate resiliency gaps before they hit production.',
            'Built Datadog SLOs, dashboards, and alerting on top of Prometheus and Grafana metrics, giving on-call teams a single pane of glass across Kubernetes workloads.'
        ],
        tags: ['AWS', 'Terraform', 'Kubernetes', 'EKS', 'Docker', 'Datadog', 'Prometheus', 'Grafana', 'Jenkins', 'GitLab CI/CD', 'Ansible']
    },
    {
        company: 'Starbucks India',
        role: 'Assistant Manager – AWS',
        period: 'May 2023 – Nov 2023',
        hash: 'b71de08',
        location: 'Mumbai, Maharashtra',
        highlights: [
            'Designed and implemented scalable, multi-AZ AWS infrastructure (EC2, VPC, S3, RDS) provisioned via Terraform to support high-availability applications.',
            'Migrated large-scale databases with AWS DMS, including on-prem Oracle to RDS/Postgres and Oracle to Kafka, cutting migration timelines and downtime windows.',
            'Automated PostgreSQL backup, restore, and failover workflows between EC2 and S3, improving disaster recovery readiness and RPO/RTO targets.',
            'Partnered with multiple teams to transition from Debezium to AWS DMS for faster, more reliable, and easier-to-operate migrations.'
        ],
        tags: ['AWS', 'Terraform', 'RDS', 'AWS DMS', 'Kafka', 'PostgreSQL', 'Azure']
    },
    {
        company: 'Tata Consultancy Services',
        role: 'AWS Cloud Engineer',
        period: 'Oct 2020 – Apr 2023',
        hash: '4c8e5a1',
        location: 'Mumbai, Maharashtra',
        highlights: [
            'Reduced provisioning time by 50% by building reusable Terraform templates and modules for multi-environment deployments.',
            'Containerized internal services with Docker and deployed to Kubernetes, laying the groundwork for later EKS adoption.',
            'Automated Kafka cluster management with Ansible, integrated into CI/CD pipelines via Jenkins.',
            'Delivered multiple on-prem to cloud database migrations (Oracle → Kafka, Oracle → Postgres, Postgres → Postgres) using AWS DMS.',
            'Monitored and optimized AWS resources with CloudWatch, CloudTrail, and Cost Explorer, reducing costs by 20% while maintaining high availability.',
            'Configured IAM roles, security groups, encryption, and access policies to strengthen infrastructure and application security.'
        ],
        tags: ['AWS', 'Terraform', 'Ansible', 'Jenkins', 'Docker', 'Kubernetes', 'AWS DMS']
    }
];

const certifications = [
    {
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        period: '',
        url: ''
    },
    {
        name: 'HashiCorp Certified: Terraform Associate (003)',
        issuer: 'HashiCorp',
        period: '',
        url: ''
    },
    {
        name: 'Claude Certified Architect – Foundations',
        issuer: 'Anthropic',
        period: '',
        url: ''
    }
];

const activities = [
    {
        title: 'PSIT Prayas — Eco Club',
        subtitle: 'Mentored 10–15 student teams weekly on sustainable, eco-friendly practices',
        issuer: 'Aug 2018 – May 2020'
    }
];

const education = {
    degree: 'B.Tech, Information Technology',
    school: 'Abdul Kalam Technical University, Lucknow, U.P — PSIT College of Engineering',
    period: 'Graduating Sep 2020',
    detail: '8.1 SGPA'
};

const Home = () => {
    return (
        <main>
            <Hero />

            <SectionDivider />

            {/* Experience — styled as a deploy log */}
            <section id="work">
                <SectionLabel>Deploy Log</SectionLabel>
                <div className="deploy-log-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
                    {experience.map((job, i) => {
                        const current = i === 0;
                        return (
                        <div key={i} style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '6px' }}>
                                <span style={{
                                    width: '9px', height: '9px', borderRadius: '50%',
                                    backgroundColor: current ? 'var(--accent)' : 'var(--border)',
                                    border: current ? 'none' : '1px solid var(--text-secondary)'
                                }} />
                                {i < experience.length - 1 && (
                                    <span style={{ width: '1px', flex: 1, backgroundColor: 'var(--border)', marginTop: '6px' }} />
                                )}
                            </div>
                            <div style={{ flex: 1, paddingBottom: i < experience.length - 1 ? 'var(--spacing-md)' : 0 }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: '4px',
                                marginBottom: 'var(--spacing-sm)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-2)' }}>#{job.hash}</span>
                                    <span style={{ fontWeight: 600, fontSize: '1rem', fontFamily: 'var(--font-display)' }}>{job.company}</span>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{job.role}</span>
                                </div>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                                    {current ? 'live · ' : ''}{job.period}
                                </div>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: job.highlights.length ? 'var(--spacing-md)' : 'var(--spacing-sm)' }}>
                                {job.location}
                            </p>
                            {job.highlights.length > 0 && (
                                <ul style={{
                                    margin: '0 0 var(--spacing-md)',
                                    padding: 0,
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px'
                                }}>
                                    {job.highlights.map((h, j) => (
                                        <li key={j} style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6,
                                            paddingLeft: '16px',
                                            position: 'relative'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                color: 'var(--accent)',
                                                lineHeight: 1.6
                                            }}>—</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                {job.tags.map((tag, k) => (
                                    <SkillTag key={k}>{tag}</SkillTag>
                                ))}
                            </div>
                            </div>
                        </div>
                    );})}
                </div>
            </section>

            <SectionDivider />

            {/* Systems — platform breadth as services */}
            <section id="systems">
                <SectionLabel>Systems · Stack</SectionLabel>
                <Systems />
            </section>

            <SectionDivider />

            {/* Certifications + Activities */}
            <section>
                <SectionLabel>Certifications & Activities</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                    {certifications.map((cert, i) => (
                        <div key={i} className="glass card-glow" style={{ borderRadius: '10px', padding: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
                            <div>
                                {cert.url ? (
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border)' }}
                                    >
                                        {cert.name}
                                    </a>
                                ) : (
                                    <span style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{cert.name}</span>
                                )}
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{cert.issuer}</p>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{cert.period}</span>
                        </div>
                    ))}
                    {activities.map((activity, i) => (
                        <div key={i} className="glass card-glow" style={{ borderRadius: '10px', padding: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
                            <div>
                                <p style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{activity.title}</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{activity.subtitle}</p>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{activity.issuer}</span>
                        </div>
                    ))}
                </div>
            </section>

            <SectionDivider />

            {/* Education */}
            <section>
                <SectionLabel>Education</SectionLabel>
                <div className="glass card-glow" style={{ borderRadius: '10px', padding: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
                    <div>
                        <p style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{education.degree}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{education.school}</p>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{education.detail}</p>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{education.period}</span>
                </div>
            </section>

            <SectionDivider />

            {/* Contact */}
            <section id="contact" style={{ paddingBottom: 'var(--spacing-xl)' }}>
                <SectionLabel>Contact</SectionLabel>
                <p style={{
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                    maxWidth: '480px',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    Building or scaling a platform? Let's talk.
                </p>
                <div className="contact-links" style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
                    <a
                        href="mailto:shivam.tiwarri@gmail.com"
                        style={{
                            fontSize: '0.95rem',
                            color: 'var(--accent)',
                            fontWeight: 500,
                            borderBottom: '1px solid var(--accent)',
                            paddingBottom: '2px'
                        }}
                    >
                        shivam.tiwarri@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shivamtiwari-i/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            borderBottom: '1px solid var(--border)',
                            paddingBottom: '2px'
                        }}
                    >
                        linkedin.com/in/shivamtiwari-i
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;
