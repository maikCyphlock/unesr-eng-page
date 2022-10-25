import { test, expect } from '@playwright/test';


test('Homepage showcase', async ({ page }) => {

  await page.goto('http://localhost:3000/');

  await page.getByRole('heading', { name: 'Universidad Simón Rodriguez Docencia en Inglés' }).click();

  await page.getByRole('heading', { name: 'Encuentra recursos e información' }).click();

  await page.getByText('Inglés instrumentalinformación y recursos').click();
  await expect(page).toHaveURL('http://localhost:3000/course/hola');

  await page.getByText('vite-plugin-react-markdown Compile Markdown to React component. Use Markdown as').click();

});