import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const dirPath = path.join(process.cwd(), 'public', 'partners');
    const files = fs.readdirSync(dirPath);
    const images = files.map(file => `/partners/${file}`);
    return NextResponse.json(images);
}