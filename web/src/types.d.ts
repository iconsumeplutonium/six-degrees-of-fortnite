import type { Vector3 } from 'three';

export interface Crossover {
    name: string;
    date: string;
    description: string;
    linkType: number;
}

export interface Path {
    found: boolean;
    path: Crossover[];
}

export type Vertex = {
    id: number;
    name: string;
    value: number;
    position: Vector3;
}

export type Edge = {
    source: number;
    target: number;
}

export type Graph = {
    nodes: Vertex[],
    links: Edge[],
    paths: Record<number, number[]>
}