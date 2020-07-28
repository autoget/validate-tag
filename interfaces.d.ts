export interface PayloadRepository {
    [key: string]: any;
    full_name?: string;
    name: string;
    owner: {
        [key: string]: any;
        login: string;
        name?: string;
    };
    html_url?: string;
}

export interface PayloadRelease {
    assets?: any[];
    assets_url?: string;
    author?: string[];
    body?: string;
    created_at?: string;
    draft?: boolean;
    html_url?: string;
    id?: number;
    name?: string;
    node_id?: string;
    prerelease?: boolean;
    published_at?: string;
    tag_name?: string;
    tarball_url?: string;
    target_commitish?: string;
    upload_url?: string;
    url?: string;
    zipball_url?: string;
}

export interface WebhookPayload {
    [key: string]: any;

    release?: PayloadRelease;

    repository?: PayloadRepository;
    issue?: {
        [key: string]: any;
        number: number;
        html_url?: string;
        body?: string;
    };
    pull_request?: {
        [key: string]: any;
        number: number;
        html_url?: string;
        body?: string;
    };
    sender?: {
        [key: string]: any;
        type: string;
    };
    action?: string;
    installation?: {
        id: number;
        [key: string]: any;
    };
    comment?: {
        id: number;
        [key: string]: any;
    };
}
