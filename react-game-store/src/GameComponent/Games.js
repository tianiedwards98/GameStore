import { useEffect, useState } from 'react';
import GameFilterBy from './GameFilterBy';
import GameForm from './GameForm';
import GameTable from './GameTable';
function Games() {

    const [games, setGames] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [scopedGame, setScopedGame] = useState({});
    const [error, setError] = useState();
    const [filterOptions, setFilterOptions] = useState({ filterText: "" });


    useEffect(() => {
        fetch(`http://localhost:8080/game`)
            .then(response => response.json())
            .then(result => setGames(result))
            .catch(console.log);

    }, []);


    function getFilteredGames(games) {

        return games.filter(
            g => g.studio.toLowerCase().includes(filterOptions.filterText.toLowerCase())
                || g.title.toLowerCase().includes(filterOptions.filterText.toLowerCase()) || g.esrbRating.toLowerCase().includes(filterOptions.filterText.toLowerCase())

        );

        console.log(filterOptions);
        return games;



        //check the filter for each box that is checked

        //use the filter options information to return a list of games that reflect the filter


    }

    function addClick() {
        setScopedGame({ id: 0, title: "", esrbRating: "", description: "", price: 0, studio: "", quantity: 0 });
        setShowForm(true);
    }
    function notify({ action, game, error }) {

        if (error) {
            setError(error);
            setShowForm(false);
            return;
        }
        setError(undefined);
        switch (action) {
            case "add":
                setGames([...games, game]);
                break;
            case "edit":
                setGames(games.map(g => {
                    if (g.id === game.id) {
                        return game;
                    }
                    return g;
                }));
                break;
            case "edit-form":
                setScopedGame(game);
                setShowForm(true);
                return;
            case "delete":
                setGames(games.filter(g => g.id !== game.id));
                break;
        }

        setShowForm(false);
    }

    if (showForm) {
        return <GameForm game={scopedGame} notify={notify} />
    }

    return (
        <>
            <div className="row mt-2">
                <div className="col-8">
                    <h1>Games</h1>
                </div>

                <div className="col">
                    <button className="btn btn-primary" onClick={addClick}> Add a Game</button>
                </div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {games.length === 0 ? <div className="alert alert-warning"> No Games</div>
                : (<div className="row row-cols-3">
                    <GameTable games={getFilteredGames(games)} notify={notify} />
                </div>)}


            <div className="col">
                <GameFilterBy filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
            </div>
        </>
    )
}
export default Games;
