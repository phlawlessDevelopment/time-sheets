import { writable } from "svelte/store";

interface Breadcrumb {
  label: string,
  link: string,
}

const Breadcrumbs = writable<Breadcrumb[]>([
]);

export { Breadcrumbs };
export type { Breadcrumb };
