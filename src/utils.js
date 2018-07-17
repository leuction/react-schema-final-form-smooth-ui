export const require = required => title =>
  !!required && title ? `${title} *` : title;
