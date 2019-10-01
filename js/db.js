// offline data in chrome indexedDB
db.enablePersistence()
    .catch( err => {
        if (err.code == 'failed-precondition') {
            console.log('persistence failed');
        } else if (err.code == "unimplemented") {
            console.log('persistence is not available ')
        }
    })

// real-time listener
db.collection('recipes').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        // console.log(change, change.doc.data());
        if (change.type === "added") {
            renderRecipe(change.doc.data(), change.doc.id)
        }

        if (change.type === "removed") {            
            removeRecipe(change.doc.id);
        }        
    })
});

// add new recipe
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
        title: form.title.value,
        ingredients: form.ingredients.value
    };

    // add data to firebase db
    db.collection('recipes').add(recipe)
        .catch(err => {
            console.log(err);
        })
    
    form.title.value = '';
    form.ingredients.value = '';
});

// delete recipe
const recipeContainer = document.querySelector('.recipes');
recipeContainer.addEventListener('click', evt => {
    if (evt.target.tagName === "I") {
        const id = evt.target.getAttribute('data-id');
        db.collection('recipes').doc(id).delete();
    }
});