import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Log the environment variables for debugging
console.log('Firebase Config Vars Present:', {
  apiKey: !!process.env.FIREBASE_API_KEY,
  authDomain: !!process.env.FIREBASE_AUTH_DOMAIN,
  projectId: !!process.env.FIREBASE_PROJECT_ID,
  storageBucket: !!process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: !!process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: !!process.env.FIREBASE_APP_ID,
  measurementId: !!process.env.FIREBASE_MEASUREMENT_ID
});

// Initialize Firebase
console.log('Initializing Firebase app...');
const app = initializeApp(firebaseConfig);
console.log('Initializing Firestore...');
const db = getFirestore(app);

// Extremely simple test data - nothing but primitives
const testDoc = {
  id: 'test-doc',
  title: 'Test Document',
  number: 123,
  boolean: true,
  simpleArray: [1, 2, 3],
  timestamp: new Date().toISOString()
};

// Function to test basic Firestore functionality
async function testBasicFirestore() {
  try {
    console.log('Testing minimal Firestore write...');
    console.log('Test document:', testDoc);
    
    // Try to write to Firestore
    const docRef = doc(db, 'minimal_test', testDoc.id);
    await setDoc(docRef, testDoc);
    console.log('✅ SUCCESS: Document written successfully');
    return true;
  } catch (error) {
    console.error('❌ ERROR: Failed to write document:', error);
    return false;
  }
}

// Run the test
testBasicFirestore().then(success => {
  console.log('Test completed with result:', success ? 'SUCCESS' : 'FAILURE');
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('Fatal error in minimal test:', error);
  process.exit(1);
}); 