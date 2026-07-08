import React, { useEffect, useRef, useState } from 'react';

const SCRIPT = [
    { type: 'cmd', text: 'terraform apply' },
    { type: 'out', text: 'Apply complete! Resources: 42 added, 0 destroyed.' },
    { type: 'cmd', text: 'kubectl rollout status deployment/api' },
    { type: 'out', text: 'deployment "api" successfully rolled out' },
    { type: 'cmd', text: 'aws fis start-experiment --id az-failure' },
    { type: 'out', text: 'experiment RUNNING — no SLO breach detected' },
    { type: 'cmd', text: 'datadog-ci monitor status' },
    { type: 'ok', text: '✓ all systems operational' },
];

const PROMPT = 'shivam@platform:~$';

const Terminal = () => {
    const [lines, setLines] = useState([]);
    const [typed, setTyped] = useState('');
    const [step, setStep] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const entry = SCRIPT[step % SCRIPT.length];

        if (entry.type === 'cmd') {
            if (typed.length < entry.text.length) {
                timeoutRef.current = setTimeout(() => {
                    setTyped(entry.text.slice(0, typed.length + 1));
                }, 35 + Math.random() * 35);
            } else {
                timeoutRef.current = setTimeout(() => {
                    setLines((l) => [...l, entry]);
                    setTyped('');
                    setStep((s) => s + 1);
                }, 450);
            }
        } else {
            timeoutRef.current = setTimeout(() => {
                setLines((l) => {
                    const next = [...l, entry];
                    // Keep the window from growing forever — restart the loop.
                    if (step >= SCRIPT.length - 1) {
                        setTimeout(() => { setLines([]); setStep(0); }, 1400);
                        return next;
                    }
                    return next;
                });
                setStep((s) => s + 1);
            }, 300);
        }

        return () => clearTimeout(timeoutRef.current);
    }, [step, typed]);

    return (
        <div className="terminal glass">
            <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#FF5F57' }} />
                <span className="terminal-dot" style={{ background: '#FEBC2E' }} />
                <span className="terminal-dot" style={{ background: '#28C840' }} />
                <span style={{ marginLeft: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    platform-status
                </span>
            </div>
            <div className="terminal-body">
                {lines.map((l, i) => (
                    <div key={i}>
                        {l.type === 'cmd' ? (
                            <span><span className="terminal-prompt">{PROMPT}</span> {l.text}</span>
                        ) : (
                            <span className={l.type === 'ok' ? 'terminal-success' : 'terminal-output'}>{l.text}</span>
                        )}
                    </div>
                ))}
                {SCRIPT[step % SCRIPT.length]?.type === 'cmd' && (
                    <div>
                        <span className="terminal-prompt">{PROMPT}</span> {typed}<span className="terminal-cursor" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
