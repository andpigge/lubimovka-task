function searchAuthor(result, searchValue) {
  return result.filter(piece => {
    const authorFirstName = piece.author_firstName.toLowerCase();
    const authorLastName = piece.author_lastName.toLowerCase();
    const searchLowerCase = searchValue.toLowerCase();

    return authorFirstName.startsWith(searchLowerCase) || authorLastName.startsWith(searchLowerCase);
  });
}

export default searchAuthor;
