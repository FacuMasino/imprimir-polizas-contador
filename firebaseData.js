import { initializeApp } from "firebase/app";
import { getFirestore, getDoc,doc, } from "firebase/firestore";
import 'dotenv/config';

const firebaseConfig = JSON.parse(process.env.FIREBASE_CREDENTIALS);

// Initialize Firebase
const appFs = initializeApp(firebaseConfig);
const dbFs = getFirestore(appFs);

export const getOthersPrints = async () => {
  const printsDoc = doc(dbFs, 'stats', 'prints');
  const printsData = await getDoc(printsDoc);
  return printsData.data().others;
}

export const getOthersDownloads = async () => {
  const printsDoc = doc(dbFs, 'stats', 'downloads');
  const printsData = await getDoc(printsDoc);
  return printsData.data().others;
}

export const getPoliciesPrints = async () => {
  const printsDoc = doc(dbFs, 'stats', 'prints');
  const printsData = await getDoc(printsDoc);
  return printsData.data().policies;
}

export const getPoliciesDownloads = async () => {
  const printsDoc = doc(dbFs, 'stats', 'downloads');
  const printsData = await getDoc(printsDoc);
  return printsData.data().policies;
}
