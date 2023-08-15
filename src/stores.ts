import { writable } from "svelte/store";
import { localStorageStore } from "@skeletonlabs/skeleton"

interface Breadcrumb {
  label: string,
  link: string,
}
interface TimeRange {
  range: number,
}

const Breadcrumbs = writable<Breadcrumb[]>([
]);
const PrevTimeRange = localStorageStore<TimeRange>("prev_time", { range: new Date().getTime() });


export { Breadcrumbs, PrevTimeRange };
export type { Breadcrumb, TimeRange };
