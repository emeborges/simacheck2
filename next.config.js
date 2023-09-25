// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
    i18n: {
        locales: ["en", "pt"],
        defaultLocale: "en",
    },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },
};
