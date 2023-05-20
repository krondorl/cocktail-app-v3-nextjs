import { NextRequest, NextResponse } from 'next/server';

export async function getRandomCocktail(): Promise<NextResponse> {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await res.json();
  return NextResponse.json(data);
}

export async function searchCocktail(searchName: string): Promise<NextResponse> {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchName);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function GET(request: NextRequest) {
  const apiMode = request.nextUrl.searchParams.get('mode');
  const searchName = request.nextUrl.searchParams.get('name');

  if (apiMode === 'random') {
    return getRandomCocktail();
  } else if (apiMode === 'search' && searchName!.length > 0) {
    return searchCocktail(searchName!);
  }

  return NextResponse.json({ hello: 'Hello World' });
}
