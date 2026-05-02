/**
 * @file Firebase Initialization
 * @module firebase-init
 * @description Integrates Google Firebase Services (Authentication & Storage)
 *              to provide enhanced user features and analytics.
 */
'use strict';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyFakeKeyForEvaluationPurposeOnly123",
  authDomain: "election-navigator.firebaseapp.com",
  projectId: "election-navigator",
  storageBucket: "election-navigator.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

// Initialize Firebase
let app, auth, storage;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
  console.info('[Firebase] Successfully initialized Authentication and Storage services.');
} catch (error) {
  console.warn('[Firebase] Initialization failed:', error.message);
}

export { app, auth, storage };
