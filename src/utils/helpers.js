export function truncateText(text, limit = 100) {

  if (text.length <= limit) {
    return text
  }

  return text.substring(0, limit) + '...'
}

export function capitalize(text) {

  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatScore(score) {

  return `${score}%`
}