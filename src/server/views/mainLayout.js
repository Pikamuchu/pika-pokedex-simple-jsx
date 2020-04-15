export const mainLayout = (body, locale) =>
  '<!DOCTYPE html>' +
  (
    <html lang="{locale || 'en'}">
      <head>
        <title>Vanilla jsx pokedex example</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" media="all" href="/main.css" />
        <script src="/main.js"></script>
      </head>
      <body>{body}</body>
    </html>
  );
