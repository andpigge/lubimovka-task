function useSearchPiece(result, searchValue) {
  return result.filter(piece => {
    const pieceLowerCase = piece.title.toLowerCase();
    const searchLowerCase = searchValue.toLowerCase();

    // Пользователь явно хотел увидеть все слова начинающие, на определенную букву.
    // Если ввел только одну букву
    if (searchValue.length === 1) {
      return pieceLowerCase.startsWith(searchLowerCase);
    }
    return pieceLowerCase.includes(searchLowerCase);
  });
}

export default useSearchPiece;
