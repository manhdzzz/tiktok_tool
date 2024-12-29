export default interface TiktokCookie {
    name: string;
    value: string;
    domain: Domain;
    path: Path;
    expires: number;
    size: number;
    httpOnly: boolean;
    secure: boolean;
    session: boolean;
    priority: Priority;
    sameParty: boolean;
    sourceScheme: SourceScheme;
    sourcePort: number;
    sameSite?: string;
}
declare enum Domain {
    DomainWWWTiktokCOM = "www.tiktok.com",
    TiktokCOM = ".tiktok.com",
    WWWTiktokCOM = ".www.tiktok.com"
}
declare enum Path {
    Empty = "/"
}
declare enum Priority {
    Medium = "Medium"
}
declare enum SourceScheme {
    Secure = "Secure"
}
export {};
