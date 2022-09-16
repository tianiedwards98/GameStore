function GameTable({ games, notify }) {

  function handleDelete(id) {
    fetch(`http://localhost:8080/game/${id}`, { method: "DELETE" })
      .then(() => notify({ action: "delete", game: games.filter(game => game.id === id)[0] }))
      .catch(error => notify({ action: "delete", error }));
  }

  function renderGameRows(games) {
    return games
      .map(
        ({ id, title, esrbRating, description, price, studio, quantity }) => (
          <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{esrbRating}</td>
            <td>{description}</td>
            <td >{price}</td>
            <td >{studio}</td>
            <td>{quantity}</td>
            <td><button type="button" className="btn btn-warning btn-sm update-btn" onClick={() => notify({ action: "edit-form", game: games.filter(g => g.id === id)[0] })}>Update</button> </td>

            <td><button type="button" className="btn btn-danger btn-sm delete-btn" onClick={() => handleDelete(id)}>Delete!{id}</button>

            </td>
          </tr>

        )
      );
  }
  return (
    <>
      <table className="table" id="game-table">
        <thead>
          <tr>
            <th scope="row">ID</th>
            <th scope="row">Title</th>
            <th scope="row">ESRB Rating</th>
            <th scope="row">Description</th>
            <th scope="row">Price</th>
            <th scope="row">Studio</th>
            <th scope="row">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {renderGameRows(games)}
        </tbody>
      </table>

    </>

  )
}
export default GameTable;