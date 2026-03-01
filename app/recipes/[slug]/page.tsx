import { recipes, RecipeSlug } from '@/data/recipes';
import RecipeCard from '@/app/components/RecipeCard';
import { notFound } from 'next/navigation';

// Next.js 15では params は Promise になります
export default async function RecipePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // Promiseをアンラップ（await）する
    const { slug } = await params;

    const recipe = recipes[slug as RecipeSlug];

    if (!recipe) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <RecipeCard {...recipe} />
        </div>
    );
}

// 静的パス生成も同様にPromise対応（必要に応じて）
export async function generateStaticParams() {
    return Object.keys(recipes).map((slug) => ({
        slug: slug,
    }));
}