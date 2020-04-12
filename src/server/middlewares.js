import { errorPage } from '../common/views/pages/errorPages';

const isProduction = process.env.NODE_ENV === 'production';

export const paramsHandler = (req, res, next) => {
  req.params.lang = req.acceptsLanguages('en', 'es');
  next();
};

export const contentHandler = (req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  next();
};

export const errorHandler = (err, req, res, next) => {
  if (!isProduction) {
    console.log(err.stack);
  }

  res.status(err.status || 500);
  res.end(errorPage(err));
};
