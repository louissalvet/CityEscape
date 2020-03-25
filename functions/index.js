const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.updateInvolvement = functions.firestore
  .document('/involving/{userId}')
  .onUpdate(async (change, context) => {
    const { FieldValue } = admin.firestore

    const { userId } = context.params

    const [after] = Object.keys(change.after.data())
    const [before] = Object.keys(change.before.data())

    const gameId = after || before

    const docRef = admin
      .firestore()
      .collection('involvement')
      .doc(gameId)

    if (before) {
      return await docRef.update({ [userId]: FieldValue.delete() })
    } else {
      return await docRef.set({ [userId]: true })
    }
  })
