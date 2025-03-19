// First, load the environment variables
import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Log environment variables status
console.log('Firebase environment variables loaded:');
console.log('- FIREBASE_API_KEY:', process.env.FIREBASE_API_KEY ? '✅ Present' : '❌ Missing');
console.log('- FIREBASE_AUTH_DOMAIN:', process.env.FIREBASE_AUTH_DOMAIN ? '✅ Present' : '❌ Missing');
console.log('- FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID ? '✅ Present' : '❌ Missing');
console.log('- FIREBASE_STORAGE_BUCKET:', process.env.FIREBASE_STORAGE_BUCKET ? '✅ Present' : '❌ Missing');
console.log('- FIREBASE_MESSAGING_SENDER_ID:', process.env.FIREBASE_MESSAGING_SENDER_ID ? '✅ Present' : '❌ Missing');
console.log('- FIREBASE_APP_ID:', process.env.FIREBASE_APP_ID ? '✅ Present' : '❌ Missing');
console.log('- FIREBASE_MEASUREMENT_ID:', process.env.FIREBASE_MEASUREMENT_ID ? '✅ Present' : '❌ Missing');

// Check if required variables are missing
const missingVars = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID'
].filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ ERROR: Missing required Firebase environment variables:', missingVars.join(', '));
  console.error('Please update your .env file with the correct Firebase configuration.');
  process.exit(1);
}

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

console.log('\nInitializing Firebase with config...');
// Initialize Firebase
try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase app initialized successfully');
  
  const db = getFirestore(app);
  console.log('Firestore initialized successfully');
  
  // Test document with simple data
  const testDoc = {
    title: 'Environment Test',
    description: 'Testing Firebase connection with env variables',
    timestamp: new Date().toISOString()
  };
  
  // Test write to Firestore
  console.log('\nAttempting to write test document to Firestore...');
  const docRef = doc(db, 'test_collection', 'env-test');
  
  setDoc(docRef, testDoc)
    .then(() => {
      console.log('✅ SUCCESS: Document written to Firestore successfully!');
      console.log('Your Firebase configuration is working correctly.');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ ERROR: Failed to write document to Firestore:', error);
      console.error('Please check your Firebase project settings and permissions.');
      process.exit(1);
    });
} catch (error) {
  console.error('❌ ERROR: Failed to initialize Firebase:', error);
  console.error('Please check your Firebase configuration.');
  process.exit(1);
} 