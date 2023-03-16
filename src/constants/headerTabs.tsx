export interface ISidebarItem {
    i?: any;
    id?: number;
    text: string;
    url?: string;
}

export const PROFILE_SIDEBAR_MENU: Array<ISidebarItem> = [
    {
        id: 0,
        text: 'All',
        url: '/characters/',
    },
    {
        id: 1,
        text: 'Filter 1',
        url: '/characters/filter1',
    },
    {
        id: 2,
        text: 'Filter 2',
        url: '/characters/filter2',
    },
    {
        id: 3,
        text: 'Filter 3',
        url: '/characters/filter3',
    },
]