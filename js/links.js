export const LINKS = {
  home: "home.html",
  booking: "booking.html",
  staff: "admin/login.html",
  receipt: "../2-digital-receipt/receipt.html",
  reviews: "../3-review-ratings/reviews.html"
};

export function getLink(name) {
  return LINKS[name] || "#";
}
