export const secondToTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (h === 0) {
    return [m, s].map((n) => String(n).padStart(2, "0")).join(":");
  }

  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
};

export const secondToTimeText = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (h === 0) {
    return `${m}m ${s}d`;
  }

  return `${h}j ${m}m`;
};

export const numberToRupiah = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const afterDiscount = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};
