export default function getStars(rating) {
  let roundedRating = Math.floor(rating);

  return "⭐".repeat(roundedRating);
}
