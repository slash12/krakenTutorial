// real-time listener
db.collection('recipes').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        // console.log(change, change.doc.data());
        if (change.type === "added") {
            renderRecipe(change.doc.data(), change.doc.id)
        }

        if (change === "removed") {

        }
    })
});