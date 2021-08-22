function useSearchPiece(pieceList, searchValue) {
  // Должен возвращать новый массив
  if (searchValue) {
    // Поиск
    return pieceList.filter(piece => {
      const pieceLowerCase = piece.toLowerCase();
      const searchLowerCase = searchValue.toLowerCase();

      const result = pieceLowerCase.includes(searchLowerCase);
      return result;
    });
  }

  return [];
}

export default useSearchPiece;
