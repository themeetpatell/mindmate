export declare const securityConfig: {
    jwt: {
        secret: string;
        refreshSecret: string;
        accessTokenExpiry: string;
        refreshTokenExpiry: string;
        issuer: string;
        audience: string;
    };
    password: {
        minLength: number;
        requireUppercase: boolean;
        requireLowercase: boolean;
        requireNumbers: boolean;
        requireSpecialChars: boolean;
        saltRounds: number;
    };
    rateLimit: {
        windowMs: number;
        max: number;
        message: string;
        standardHeaders: boolean;
        legacyHeaders: boolean;
    };
    cors: {
        origin: string;
        credentials: boolean;
        methods: string[];
        allowedHeaders: string[];
    };
    headers: {
        'X-Frame-Options': string;
        'X-Content-Type-Options': string;
        'X-XSS-Protection': string;
        'Referrer-Policy': string;
        'Content-Security-Policy': string;
    };
    validation: {
        maxStringLength: number;
        maxArrayLength: number;
        maxFileSize: number;
        allowedFileTypes: string[];
    };
    session: {
        secure: boolean;
        httpOnly: boolean;
        maxAge: number;
        sameSite: "strict";
    };
};
//# sourceMappingURL=security.d.ts.map