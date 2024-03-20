const { initializeApp } = require("firebase/app");
const { getFirestore, getDoc,doc, } = require("firebase/firestore");
require('dotenv').config()

const firebaseConfig = JSON.parse(process.env.FIREBASE_CREDENTIALS);

// Initialize Firebase
const appFs = initializeApp(firebaseConfig);
const dbFs = getFirestore(appFs);

const getOthersPrints = async () => {
  const printsDoc = doc(dbFs, 'stats', 'prints');
  const printsData = await getDoc(printsDoc);
  return printsData.data().others;
}

const getOthersDownloads = async () => {
  const printsDoc = doc(dbFs, 'stats', 'downloads');
  const printsData = await getDoc(printsDoc);
  return printsData.data().others;
}

const getPoliciesPrints = async () => {
  const printsDoc = doc(dbFs, 'stats', 'prints');
  const printsData = await getDoc(printsDoc);
  return printsData.data().policies;
}

const getPoliciesDownloads = async () => {
  const printsDoc = doc(dbFs, 'stats', 'downloads');
  const printsData = await getDoc(printsDoc);
  return printsData.data().policies;
}

module.exports = {getOthersPrints, getOthersDownloads, getPoliciesPrints, getPoliciesDownloads};