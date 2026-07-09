import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../theme';

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

const HELP_LINES = [
    'available commands:',
    '  whoami       — who is running this platform',
    '  skills       — core stack',
    '  experience   — jump to the deploy log',
    '  certs        — certifications',
    '  contact      — how to reach me',
    '  theme        — toggle light/dark',
    '  linkedin     — open my LinkedIn',
    '  clear        — clear the terminal',
    '  help         — show this again',
];

const Terminal = () => {
    const [lines, setLines] = useState([]);
    const [typed, setTyped] = useState('');
    const [step, setStep] = useState(0);
    const [interactive, setInteractive] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(null);
    const timeoutRef = useRef(null);
    const inputRef = useRef(null);
    const bodyRef = useRef(null);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (id) => {
        const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(scroll, 80);
        } else {
            scroll();
        }
    };

    // Scripted intro — runs until the visitor takes over.
    useEffect(() => {
        if (interactive) return;
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
    }, [step, typed, interactive]);

    useEffect(() => {
        if (interactive) bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
    }, [lines, interactive]);

    const enterInteractive = () => {
        if (interactive) return;
        clearTimeout(timeoutRef.current);
        setInteractive(true);
        setLines((l) => [
            ...l,
            { type: 'out', text: "— live shell. type 'help' to see what's available —" },
        ]);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const runCommand = (raw) => {
        const cmd = raw.trim();
        const echo = { type: 'cmd', text: cmd };
        if (!cmd) {
            setLines((l) => [...l, echo]);
            return;
        }

        const push = (text, type = 'out') => setLines((l) => [...l, echo, { type, text }]);
        const [head] = cmd.toLowerCase().split(/\s+/);

        switch (head) {
            case 'help':
                push(HELP_LINES.join('\n'));
                break;
            case 'whoami':
                push('shivam tiwari — platform & devops engineer, 6+ yrs on AWS, Kubernetes, and Terraform.');
                break;
            case 'skills':
                push('AWS · Kubernetes · Terraform · Docker · Datadog · Prometheus/Grafana · Jenkins · GitLab CI/CD · Ansible');
                break;
            case 'experience':
                push('opening the deploy log…');
                goToSection('work');
                break;
            case 'certs':
                push('AWS SA-Associate · HashiCorp Terraform Associate · Claude Certified Architect – Foundations');
                break;
            case 'contact':
                push('email: shivam.tiwarri@gmail.com · linkedin.com/in/shivamtiwari-i');
                break;
            case 'linkedin':
                push('opening linkedin.com/in/shivamtiwari-i …');
                window.open('https://www.linkedin.com/in/shivamtiwari-i/', '_blank', 'noopener');
                break;
            case 'theme':
                push(`switching to ${theme === 'light' ? 'dark' : 'light'} theme…`, 'ok');
                toggleTheme();
                break;
            case 'clear':
                setLines([]);
                return;
            case 'sudo':
                push('nice try. permission denied.');
                break;
            default:
                push(`command not found: ${cmd} — type 'help' for a list.`);
        }
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            runCommand(input);
            setHistory((h) => (input.trim() ? [...h, input] : h));
            setHistoryIdx(null);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (!history.length) return;
            const idx = historyIdx === null ? history.length - 1 : Math.max(historyIdx - 1, 0);
            setHistoryIdx(idx);
            setInput(history[idx]);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIdx === null) return;
            const idx = historyIdx + 1;
            if (idx >= history.length) {
                setHistoryIdx(null);
                setInput('');
            } else {
                setHistoryIdx(idx);
                setInput(history[idx]);
            }
        }
    };

    return (
        <div className="terminal glass">
            <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#FF5F57' }} />
                <span className="terminal-dot" style={{ background: '#FEBC2E' }} />
                <span className="terminal-dot" style={{ background: '#28C840' }} />
                <span style={{ marginLeft: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                    platform-status
                </span>
                {!interactive && (
                    <button
                        onClick={enterInteractive}
                        className="terminal-live-btn"
                        style={{
                            marginLeft: 'auto', cursor: 'pointer', fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem', color: 'var(--accent)', background: 'transparent',
                            border: '1px solid var(--border)', borderRadius: '999px', padding: '2px 9px'
                        }}
                    >
                        try it live
                    </button>
                )}
            </div>
            <div
                className="terminal-body"
                ref={bodyRef}
                onClick={enterInteractive}
                style={{ cursor: interactive ? 'text' : 'pointer', maxHeight: interactive ? '220px' : undefined, overflowY: interactive ? 'auto' : undefined }}
            >
                {lines.map((l, i) => (
                    <div key={i} style={{ whiteSpace: 'pre-wrap' }}>
                        {l.type === 'cmd' ? (
                            <span><span className="terminal-prompt">{PROMPT}</span> {l.text}</span>
                        ) : (
                            <span className={l.type === 'ok' ? 'terminal-success' : 'terminal-output'}>{l.text}</span>
                        )}
                    </div>
                ))}
                {!interactive && SCRIPT[step % SCRIPT.length]?.type === 'cmd' && (
                    <div>
                        <span className="terminal-prompt">{PROMPT}</span> {typed}<span className="terminal-cursor" />
                    </div>
                )}
                {interactive && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className="terminal-prompt">{PROMPT}</span>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            spellCheck="false"
                            autoComplete="off"
                            aria-label="Terminal input — type help for commands"
                            style={{
                                flex: 1, marginLeft: '6px', background: 'transparent', border: 'none',
                                outline: 'none', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)',
                                fontSize: '0.82rem'
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
