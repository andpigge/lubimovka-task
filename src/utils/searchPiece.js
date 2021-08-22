function useSearchPiece(pieceList, searchValue) {
  // Должен возвращать новый массив
  if (searchValue) {
    // Поиск
    return pieceList.filter(piece => {
      const pieceLowerCase = piece.toLowerCase();
      const searchLowerCase = searchValue.toLowerCase();

      // Оставлю. Возможно в будущем пригодится посмотреть в чем была ошибка
      // const result = pieceLowerCase.includes(searchLowerCase);

      const result = pieceLowerCase.startsWith(searchLowerCase)

      return result;
    });
  }

  return [];
}

export default useSearchPiece;
