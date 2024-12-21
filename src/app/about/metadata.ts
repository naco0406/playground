export interface ProjectMetadata {
    title: string;
    description?: string;
    path?: string;
    status: 'completed' | 'in-progress' | 'pending' | 'planned';
    children?: ProjectMetadata[];
}

export const siteMetadata: ProjectMetadata[] = [
    {
        title: 'KBO',
        description: '2025 KBO 개막 전까지 개발 중',
        path: '/lookalike',
        status: 'in-progress',
        children: [
            {
                title: '나와 닮은 야구선수',
                description: 'KBO 닮은꼴 찾기',
                path: '#',
                status: 'in-progress',
            },
        ],
    },
    {
        title: 'Playground',
        description: '김나코의 놀이터',
        path: '/',
        status: 'in-progress',
    },
    {
        title: 'Linkle',
        description: '매일 위키피디아 탐험하기',
        path: 'https://linkle.naco.kr/',
        status: 'completed',
    },
    {
        title: 'MEVIS',
        description: 'MetaEarth Visualization System',
        path: 'https://mevis.vercel.app/',
        status: 'pending',
    },
    {
        title: 'TMI',
        description: '오늘의 TMI',
        path: 'https://tmi.naco.kr/',
        status: 'pending',
    },
    {
        title: 'SSS',
        description: 'Swing Smash Squash',
        path: 'https://sss.naco.kr/',
        status: 'completed',
    },
    {
        title: 'Clipboard',
        description: 'Custom Web Clipboard',
        path: 'https://clip.naco.kr/',
        status: 'completed',
    },
    {
        title: 'AI Translator',
        description: '나는 통역 전문가 이다',
        path: 'https://translate.naco.kr/',
        status: 'completed',
    },
];