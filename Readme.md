
### Tech Stack
- Frontend: React, TypeScript, Tailwind CSS, Vite
- Backend: Node.js, Express, TypeScript
- External API: The Movie Database (TMDB)

### Features
- Popular movies list
- Search movies (via backend)
- Movie detail page
- Clean API response & error handling
- Responsive UI



### How to Run

!!! Notes : use nvm 18 or higher (22) 

### Frontend
```bash
cd frontend 
npm install
npm run dev
 
#### Backend
```bash
cd backend
npm install
npm run dev



**Architecture Overview

Backend as BFF (Backend For Frontend)
All TMDB requests go through backend to:


Normalize API responses

Centralize error handling

Service Layer

tmdb.service.ts handles all communication with TMDB

Controller Layer

Controllers handle HTTP requests & responses only

Frontend
-List movie
-Detail pages
-Responsive design
-Tailwind css 




**Trade-offs & Decisions

Axios over Fetch API
→ cleaner API layer and easier error handling

Tailwind CSS
→ fast iteration, scalable UI, no fragile custom CSS

No authentication layer
→ intentionally out of scope for this assignment


