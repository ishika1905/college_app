import puppeteer from 'puppeteer';

export async function fetchInstagramPosts(profileURL) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto(profileURL, { waitUntil: 'networkidle2' });
  await page.waitForSelector('article');

  const posts = await page.evaluate(() => {
    const data = [];
    const postElements = document.querySelectorAll('article img');

    postElements.forEach((img) => {
      data.push({
        image: img.src,
        alt: img.alt,
      });
    });

    return data;
  });

  await browser.close();
  return posts;
}
