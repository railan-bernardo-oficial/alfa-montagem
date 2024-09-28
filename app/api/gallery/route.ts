import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

interface Item {
  imagem: string;
  category: string;
}

export async function GET() {
  const galleryPath = path.join(process.cwd(), 'public', 'gallery');
  const categories = fs.readdirSync(galleryPath); // Lê os diretórios (categorias)

  const items: Item[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(galleryPath, category);
    const images = fs.readdirSync(categoryPath); // Lê as imagens dentro da categoria

    images.forEach((image) => {
      items.push({
        imagem: `/gallery/${category}/${image}`,
        category,
      });
    });
  });

  return NextResponse.json(items); // Retorna os itens como JSON
}
