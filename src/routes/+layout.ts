import { getItem } from "$lib/local-storage";
import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const prerender = false;
export const ssr = false;

export const load = (({ url }) => {
    const user = getItem('user');

    if (url.pathname.startsWith('/dashboard') && user === null) {
        throw redirect(301, '/');
    }

    if (!url.pathname.startsWith('/dashboard') && user !== null) {
        throw redirect(301, '/dashboard/files');
    }

    return { pathname: url.pathname };
    
}) satisfies LayoutLoad;

