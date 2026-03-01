import Link from 'next/link';
import { recipes } from '@/data/recipes';

export default function RecipesIndexPage() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">レシピ一覧</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(recipes).map(([slug, recipe]) => (
                    <Link href={`/recipes/${slug}`} key={slug}>
                        <div className="border rounded-xl p-6 hover:shadow-md transition bg-white cursor-pointer">
                            <h2 className="text-xl font-bold text-orange-600">{recipe.title}</h2>
                            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{recipe.description}</p>
                            <div className="mt-4 text-sm font-medium text-gray-400">レシピを見る →</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}