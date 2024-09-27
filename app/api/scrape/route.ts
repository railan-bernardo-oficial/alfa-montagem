import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
  try {
    // Iniciar o browser com Puppeteer
    const browser = await puppeteer.launch({
      headless: true, // Use o modo headless para garantir que funcione em servidores
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Essas opções são úteis em ambientes de produção
    });
    const page = await browser.newPage();

    // Acessar uma URL (modifique conforme necessário)
    await page.goto('https://www.google.com/search?q=Montador+de+m%C3%B3veis+em+Goi%C3%A2nia&stick=H4sIAAAAAAAA_-NgU1I1qDBJSUk1SE2yTDNOSjUwNUqzMqgwM0tMNTZNTUlLSzKzNDE1X8Qq75ufV5KYkl-kkJKqkHt4c1lqZrFCaq6Ce37m4UV5mYkAiDP5bUsAAAA&hl=pt-BR&mat=Cen72l1TaSJbElYBEKoLaXGIfaVGtH_aMFIK-6qTkkbnrsaAoqMP51B9mcygwUxJriDB1xXtY0PWpDTvbl8UWREmXwWpMGMTVywQWJnIZ1IuDkRD9ClnSR7xBosYISR3Yg&authuser=0#mpd=~6566927013437438953/customers/reviews');

    
    const result = await page.evaluate(() => {
      return document.querySelector('a')?.innerText;
    });

    // Fechar o browser
    await browser.close();

    // Retornar o resultado como JSON
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Erro no scraping:', error);
    return NextResponse.json(
      { error: 'Ocorreu um erro no scraping.' },
      { status: 500 }
    );
  }
}
