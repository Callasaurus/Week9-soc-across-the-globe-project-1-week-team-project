import './App.css';
import { FilterBar } from './components/FilterBar/FilterBar.js'
import { Header } from './components/Header/Header.js'
import { Input } from './components/Input/Input.js'
import { ObjectList } from './components/ObjectList/ObjectList.js'
import { StartPage } from './components/StartPage/StartPage.js'
import { useState } from 'react'

const url = "http://localhost:3001/api"

function App() {

  // Object or set of objects sent to ObjectList
  const [object, setObject] = useState([])
  // Input sent from FilterBar for the specific get request
  const [input, setInput] = useState("")
  // Foreign search input sent from FilterBar for the specific get request
  const [translateSearch, setTranslateInput] = useState()
  // Visibility for the 'create new object' form
  const [isVisible, setVisible] = useState()
  // Visibility for the 'edit object' form
  const [isEditVisible, setEditVisible] = useState()
  // Start page visibility 
  const [isStartPageVisible, setIsStartPageVisible] = useState(true)
  // Id of the object to be edited
  const [editObject, setEditObject] = useState()
  // State for the favourites 
  const [faveArray, setfaveArray] = useState([])
  // State for languages
  const [language, setLanguage] = useState('englishDefinitions')
  // State that will be toggled from true to false depending on editing or adding (for validation purposes)
  const [editOrAdd, setEditOrAdd] = useState(false)
  // state for holding object to edit to be sent to pre-populate edit forms  
  const [wholeEditObject, setWholeEditObject] = useState([])


  // Uncomment to store favourites in local storage (& add JSON.parse code inside the faveArray useState)

      // useEffect(() => {
      //   localStorage.setItem('fave', JSON.stringify(faveArray));
      // }, [faveArray]);

      // [JSON.parse(localStorage.getItem('fave'))]


  // fetch request for all objects, returns and renders all (all languages) & resets all input fields

  async function getAllObjects() {
    const allObjects = await fetch(`${url}/${language}`);
    let data = await allObjects.json();
    setObject(data.payload)
    setInput('')
    setTranslateInput('')
  }

  // fetch request for specific object(s), returns and renders specific items based on search and click of 'search button' (all languages) & resets all input fields

  async function getByTitle() {
    const titleObject = await fetch(`${url}/${language}/${input}`);
    let data = await titleObject.json();
    setObject(data.payload);
    setInput('')
    setTranslateInput('')
  }

  // fetch request for specific object(s) in non-English language, returns and renders items (when on a foreign language endpoint) & resets all input fields

  async function getByForeignTitle() {
    const titleObject = await fetch(`${url}/${language}/english/${translateSearch}`);
    let data = await titleObject.json();
    setObject(data.payload);
    setInput('')
    setTranslateInput('')
  }

  // post request for new object (handed down to input component)

  async function handleNewObject(newObject) {
    const objectToAdd = await fetch(`${url}/${language}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObject)
    })
    let data = await objectToAdd.json();
    let brandNewObject = data.payload[0];
    const objectToAddOnScreen = [...object, brandNewObject];
    setObject(objectToAddOnScreen);
  }

  // function that: toggles whether the 'Add New Resource' box is visible or not (toggled on button click); calls the addingNotEditing function; sets the wholeEditObject array to empty array (resetting input fields for add new resource)

  function handleAddVisibility() {
    setVisible(current => !current);
    addingNotEditing()
    setWholeEditObject([])
  }

  // edit request for specific object (handed down edit-sepcific input component)

  async function handleEdit(changes) {
    const targetEditObject = object.filter(itemToEdit => { return itemToEdit.id === editObject })
    const editedItem = createEditObject(targetEditObject, changes)
    await fetch(`${url}/${language}/${editObject}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedItem[0])
    })
  }

  // function that creates a new edited object (if values unchanged, original ones are kept) - called inside handleEdit

  function createEditObject(original, newEdit) {
    const keys = Object.keys(newEdit)
    for (let i = 0; i < keys.length; i++) {
      if (newEdit[keys[i]]) {
        original[0][keys[i]] = newEdit[keys[i]]
      }
    }
    return original
  }

  // Function that sets the editObject state to be the id of the item to edit (passed down to object list and mapped to object items) & calls the function that makes the edit input box visible 

  function handleEditObjectState(object) {
    setEditObject(object);
    handleVisibilityEdit();
  }

  // Function that populates the wholeEditObject state with the object that the edit button is clicked on (used to pre-populate edit form)

  function holdEditObject(object) {
    setWholeEditObject(object)
  }

  // function that toggles whether the 'Edit' box is visible or not (toggled on button click)

  function handleVisibilityEdit() {
    setEditVisible(current => !current);
  }

  // delete request for specific object (handed down to object list component and then object component)

  async function handleDelete(id) {
    for (let i = 0; i < object.length; i++) {
      if (object[i].id === id) {
        await fetch(`${url}/${language}/${id}`, {
          method: "DELETE"
        })
        const deleted = [...object.slice(0, i), ...object.slice(i + 1)];
        setObject(deleted);
      }
    } return
  }

  // function that is passed down to the filter bar that takes in the state of the the text input in the translate search bar 

  function handleTranslateSearch(e) {
    setTranslateInput(e.target.value);
  }

  // function that is passed down to the filter bar that takes in the state of the the text input in the main search bar 

  function handleChange(e) {
    setInput(e.target.value);
  }

  // function that sorts the objects in ascending order (by week)

  function sortByWeek() {
    let sortedObjects = [...object].sort(function (a, b) { return a.week - b.week });
    setObject(sortedObjects);
  }

  // function that populates the new favourited items into the faveArray state (but no duplicates)

  function favourite(id) {
    const editFavourite = object.filter(fave => { return fave.id === id });
    if (!faveArray.includes(editFavourite[0])) {
      const newArray = [...faveArray, editFavourite[0]];
      setfaveArray(newArray);
    }
  }

  // function that displays the favourite list on button click 

  function displayFavourite() {
    setObject(faveArray);
  }

  // change the language from a button click on either startpage or header & also adds white borders around flags when clicked in header

  function handleLanguage(e) {
    setLanguage(e.target.name)
    changeStartState();
    setObject([]);
  }

  // function that toggles whether the StartPage is visible or not 

  function changeStartState() {
    if (isStartPageVisible) {
      setIsStartPageVisible(current => !current);
    }
  };

  // function that changes editOrAdd state to false (which is passed down to ObjectItem and called on edit button click)

  function editing() {
    setEditOrAdd(false)
  }

  // function that changes editOrAdd state to true (which called on add new resource button click)

  function addingNotEditing() {
    setEditOrAdd(true)
  }


  return (
    <div className="App">
      <div className="start-page" style={{ visibility: isStartPageVisible ? 'visible' : 'hidden' }}>
        <StartPage handleLanguage={handleLanguage}></StartPage>
      </div>

      <div className="main-container">
        <div className="languages">
          <Header language={language} handleLanguage={handleLanguage}></Header>
        </div>

        <div className="search-bar">
          <FilterBar getAllObjects={getAllObjects} getByForeignTitle={getByForeignTitle} language={language} getByTitle={getByTitle} handleTranslate={handleTranslateSearch} handleChange={handleChange} handleSort={sortByWeek} displayFave={displayFavourite} input={input} translateSearch={translateSearch}></FilterBar>
        </div>
      </div>

      <div className="form-container" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <Input visibility={handleAddVisibility} handleNewObject={handleNewObject} language={language} editOrAdd={editOrAdd} wholeEditObject={wholeEditObject}></Input>
      </div>

      <div className="form-container" style={{ visibility: isEditVisible ? 'visible' : 'hidden' }}>
        <Input visibility={handleVisibilityEdit} handleNewObject={handleEdit} language={language} editOrAdd={editOrAdd} wholeEditObject={wholeEditObject}></Input>
      </div>

      <div className="main-container">
        <button className="addNewButton" onClick={handleAddVisibility}>Add New Resource</button>
        <ObjectList object={object} handleFavourite={favourite} handleDelete={handleDelete} handleEdit={handleEditObjectState} editing={editing} holdEditObject={holdEditObject}></ObjectList>
      </div>
    </div>
  );
}

export default App;
