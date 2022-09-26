import { InternalLayer2, InternalProject } from "../types/Api";
/** Returns available project categories based on the given projects. */
export function getProjectCategories(projects: InternalProject[]): string[] {
    const categories: Map<string, null> = new Map()
    
    for(const project of projects) {
        for(const category of project.categories) {
            categories.set(category, null)
        }
    }

    const array: string[] = []

    categories.forEach((_, c) => array.push(c))

    return array
}


/** Returns available layer 2 categories based on the given layer 2s. */
export function getLayer2Categories(layer2s: InternalLayer2[]): string[] {
    const categories: Map<string, null> = new Map()
    
    for(const layer2 of layer2s) {
        for(const category of layer2.categories) {
            categories.set(category, null)
        }
    }

    const array: string[] = []

    categories.forEach((_, c) => array.push(c))

    return array
}