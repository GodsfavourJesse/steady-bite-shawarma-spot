// lib/metadata.ts
export function createPageTitle(pageTitle?: string) {
    const siteName = "Steady Bite";
    return pageTitle ? `${siteName} | ${pageTitle}` : siteName;
}
