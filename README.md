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
REST-based API
Clear separation between routes and data
Stateless API returning JSON
In-memory mock data

#Frontend
Centralized state using BehaviorSubject
Reactive streams for filtering (switchMap, debounceTime)
Standalone Angular components for simplicity
API calls handled via services

### Functional Requirements
- Display diagnostic events for fleet vehicles
- Filter events by:
  - Vehicle ID
  - Severity level (ERROR, WARN, INFO)
- Show results in a tabular format
- Handle empty and error states

### Non-Functional Requirements
- Clean separation between frontend and backend
- Readable, maintainable code
- Easy setup and execution

### Assumptions
- Authentication is out of scope
- Dataset is small and suitable for client-side filtering
- Backend uses mock/in-memory data for simplicity

#Assumptions
Data is small enough to be filtered on the client
Authentication is not required
Backend uses mocked/in-memory data

#### Example Response
```json
[
  {
    "id": "b6759ce2-e33f-4161-a3a6-be8d6fc52135",
    "vehicleId": "1234",
    "timestamp": "2025-07-24T14:21:08.000Z",
    "level": "ERROR",
    "code": "U0420",
    "message": "Steering angle sensor malfunction"
  }
]
