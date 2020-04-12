export const mainLayout = (body, locale) => (
  <html lang="{locale}">
    <head>
      <title>Vanilla jsx pokedex example</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" media="all" href="/main.css" />
    </head>
    <body>{body}</body>
  </html>
);
