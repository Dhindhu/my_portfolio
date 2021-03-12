// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Beautiful', 'Talented', 'Tenaciuos', 'Diligent', 'Goal oriented', 'Celebrated', 'Creative', 'Inspiring', 'Happy'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/** Function to fetch current date from server and add to the page. */
async function serverTime() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();
  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = textFromResponse;
}

async function showMessage() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const messageContainer = document.getElementById('message-container');
  messageContainer.innerText = textFromResponse;
}

//function to get random message from ArrayList function
async function showWriters(){
    const responseFromServer = await fetch('/writers');
    const writers = await responseFromServer.json();

    const randomWriter = writers[Math.floor(Math.random() * writers.length)];           
    const writersListElement = document.getElementById('random-writer-container');
    writersListElement.innerHTML = randomWriter;

    writersListElement.appendChild(
        createListElement("Today's writer of the day is: " + randomWriter));
}
