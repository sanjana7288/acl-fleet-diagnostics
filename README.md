# Fleet Diagnostics Application

A full-stack Fleet Diagnostics application that displays vehicle diagnostic events and allows filtering by vehicle ID and severity level.


## Tech Stack

### Frontend
- Angular (Standalone components)
- RxJS (state handling with BehaviorSubject)
- SCSS

### Backend
- Node.js
- Express
- REST API
- In-memory data (mocked diagnostics events)


### Prerequisites
- Node.js (v18+ recommended)
- npm

###  Backend Setup
bash
cd backend
npm install
npm run start

##Backend runs on: http://localhost:3000

### Frontend Setup
cd frontend
npm install
ng serve

##Frontend runs on : http://localhost:4200

##Features Implemented
View diagnostic events in a table
Filter events by:
Vehicle ID
Severity level (ERROR, WARN, INFO)
Reactive filtering using RxJS
Clean separation of concerns (API, state, UI)

###Architecture & Design Decisions
#Backend
REST-based API using Express
Clear separation between routes and data
Stateless API returning JSON

#Frontend
Centralized state using BehaviorSubject
Reactive streams for filtering (switchMap, debounceTime)
Standalone Angular components for simplicity
API calls handled via services

#Assumptions
Data is small enough to be filtered on the client
Authentication is not required
Backend uses mocked/in-memory data
