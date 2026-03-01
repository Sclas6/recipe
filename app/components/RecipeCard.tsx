import React from 'react';
import { Clock, Banknote, Utensils } from 'lucide-react'; // アイコン用（任意）

interface Ingredient {
    name: string;
    amount: string;
}

interface RecipeProps {
    title: string;
    description: string;
    costPerServing?: string;
    ingredients: {
        category: string;
        items: string[];
    }[];
    instructions: string[];
}

const RecipeCard = ({ title, description, costPerServing, ingredients, instructions }: RecipeProps) => {
    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 my-6">
            {/* ヘッダーセクション */}
            <div className="p-6 bg-orange-50">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    {costPerServing && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            <Banknote className="w-4 h-4 mr-1" />
                            {costPerServing}
                        </span>
                    )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="p-6">
                {/* 材料セクション */}
                <section className="mb-8">
                    <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <Utensils className="w-5 h-5 mr-2 text-orange-500" />
                        材料
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ingredients.map((group, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-orange-600 text-sm mb-2 border-b border-orange-200 pb-1">
                                    {group.category}
                                </h4>
                                <ul className="space-y-1">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex justify-between">
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 作り方セクション */}
                <section>
                    <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
                        <Clock className="w-5 h-5 mr-2 text-orange-500" />
                        作り方
                    </h3>
                    <ol className="space-y-4">
                        {instructions.map((step, idx) => (
                            <li key={idx} className="flex gap-4">
                                <span className="flex-none w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                                    {idx + 1}
                                </span>
                                <p className="text-gray-700 leading-relaxed">{step}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>
        </div>
    );
};

export default RecipeCard;