/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Template {
    id: number;
    title: string;
    cost: number;
    description: string;
    imageUrl: string;
    rating: number;
    previewLink: string;
    purchaseLink: string;
    category: string;
}