function filterResultPiece(result, pieceListFilter) {
  return result.filter(piece => pieceListFilter.includes(piece.title));
}

export default filterResultPiece;