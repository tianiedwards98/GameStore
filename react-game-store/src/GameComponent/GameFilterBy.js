import { useState } from 'react';

function GameFilterBy({ filterOptions, setFilterOptions }) {

  const [games, setGames] = useState([]);

  function updateFilterText(evt) {
    console.log(evt.target.name);
    console.log(evt.target.type);
    const copy = { ...filterOptions };
    //if the type is checkbox, you have to find the property of filter options with the name of the target name and if it doesn't exist set it to true. if it does exist you have to toggle it.
    if (evt.target.type === "checkbox") {
      if (filterOptions[evt.target.name]) {
        copy[evt.target.name] = false;
      }
      else {
        copy[evt.target.name] = true;
      }
    }
    else {
      copy.filterText = evt.target.value;
    }
    console.log(copy);

    setFilterOptions(copy);

    // if the type is not check box i need to update the filterText to evt.target.value and then call filter options on the new set filter options
  }
  function isChecked(filterName) {
    return filterOptions[filterName];
  }



  return (
    <div className="col-lg">
      <div className="col" id="filter-col">
        <input type="text" placeholder="Search.." value={filterOptions.filterText} onChange={updateFilterText} ></input>
        <input type="checkbox" name="rating" id="rating" checked={isChecked('rating')} onChange={updateFilterText} ></input>
        <label for="myCheck">Rating</label>

        <input type="checkbox" name="studio" id="studio" checked={isChecked('studio')} onChange={updateFilterText}></input>
        <label for="myCheck">Studio</label>

        <input type="checkbox" name="title" id="title" checked={isChecked('title')}
          onChange={updateFilterText}></input>
        <label for="myCheck">Title</label>
      </div>
    </div>
  )
}
export default GameFilterBy;