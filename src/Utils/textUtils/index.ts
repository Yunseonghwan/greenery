export const trimText = (text = "", limit: number) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
