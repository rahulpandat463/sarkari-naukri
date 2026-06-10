"use client";

import Link from "next/link";
import { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
  count: number;
}

export default function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="bg-white rounded-lg shadow-md border border-gray-200 p-5 hover:shadow-lg hover:border-primary transition-all group"
    >
      <div className="text-3xl mb-2">{category.icon}</div>
      <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors">{category.label}</h3>
      <p className="text-xs text-gray-500 mt-1">{category.description}</p>
      <p className="text-sm font-semibold text-primary mt-2">{count} नौकरियां</p>
    </Link>
  );
}
