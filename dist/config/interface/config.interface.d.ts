export interface Config {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    pass: string;
    salt: number;
    token: string;
    db_host: string;
    db_port: number;
    db_user: string;
    db_pass: string;
    db_database: string;
}
