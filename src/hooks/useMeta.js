import { useEffect } from 'react';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://shivamtiwari.dev';

const DEFAULTS = {
    title: 'Shivam Tiwari — Platform Engineer',
    description: 'Platform and DevOps engineer specializing in AWS, Terraform, and Kubernetes. I design resilient cloud infrastructure and automate the pipelines that ship it.',
    url: SITE_URL + '/',
    type: 'website',
};

function setTag(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
}

/**
 * Updates <head> meta tags for the current page.
 * Restores homepage defaults on unmount.
 *
 * @param {object} opts
 * @param {string} opts.title       Full page title, e.g. "Post Title — Shivam Tiwari"
 * @param {string} opts.description Page-specific meta description (max ~155 chars)
 * @param {string} opts.path        Relative path, e.g. "/blog/my-post" (no trailing slash)
 * @param {string} [opts.type]      OG type — "website" | "article". Defaults to "website"
 */
export function useMeta({ title, description, path, type = 'website' }) {
    useEffect(() => {
        const url = SITE_URL + (path || '/');

        document.title = title;
        setTag('meta[name="description"]',        'content', description);
        setTag('meta[property="og:title"]',       'content', title);
        setTag('meta[property="og:description"]', 'content', description);
        setTag('meta[property="og:url"]',         'content', url);
        setTag('meta[property="og:type"]',        'content', type);
        setTag('link[rel="canonical"]',           'href',    url);
        setTag('meta[name="twitter:title"]',      'content', title);
        setTag('meta[name="twitter:description"]','content', description);

        return () => {
            document.title = DEFAULTS.title;
            setTag('meta[name="description"]',        'content', DEFAULTS.description);
            setTag('meta[property="og:title"]',       'content', DEFAULTS.title);
            setTag('meta[property="og:description"]', 'content', DEFAULTS.description);
            setTag('meta[property="og:url"]',         'content', DEFAULTS.url);
            setTag('meta[property="og:type"]',        'content', DEFAULTS.type);
            setTag('link[rel="canonical"]',           'href',    DEFAULTS.url);
            setTag('meta[name="twitter:title"]',      'content', DEFAULTS.title);
            setTag('meta[name="twitter:description"]','content', DEFAULTS.description);
        };
    }, [title, description, path, type]);
}
