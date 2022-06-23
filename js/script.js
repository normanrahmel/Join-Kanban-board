let notes = [];

async function firstrender(){
    // alert('Hi meine großartigen Teamkollegen');
    loadNotes();
}


async function loadNotes() {
    let notesJSONAsText = localStorage.getItem('notesJSON');

    if (notesJSONAsText) {   //fängt Fehlermeldung ab, falls noch kein Array existiert
        notes = JSON.parse(notesJSONAsText);
    }else{      // beim ersten Start wird ein Beispiel aus der JSON geladen 
        notes = await loadNoteJSON_API();
    }
}


function addNote(){

    let newNoteASJSON = creatNotesJSON();
    
    console.log(newNoteASJSON);

    notes.push(newNoteASJSON);
    saveNotes();
}


function creatNotesJSON(){
    let title = document.getElementById('taskTitle').value;
    let date = document.getElementById('taskDate').value;
    let category = document.getElementById('taskCategory').value;
    let urgency = document.getElementById('taskUrgency').value;
    let description = document.getElementById('taskDescription').value;
    let employees = document.getElementById('taskEmployees').value;
    let show = "backlog"

    return {urgency, date, title, description, category, employees, show};
}


function saveNotes(){
    let notesJSONAsText = JSON.stringify(notes); 
    
    localStorage.setItem('notesJSON', notesJSONAsText); 
}


async function loadNoteJSON_API(){
    let responseAsText = await fetch('./JSON/storage.json');
    return responseJSON = await responseAsText.json();
}