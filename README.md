# Kit-s-place
I made this web application for my girlfriend to keep track of her recipes and book reviews

## Tech Stack
- Frontend: React, Vite, TypeScript
- Backend: Node.js, Express, PostgreSQL, TypeScript
- Containerization: Docker, Docker Compose

## Setup Instructions

### Prerequisites
- Docker and Docker Compose installed on your machine
- Node.js (v22) and npm (11.3.0) installed (for local development)

### Running with Docker
When developing the application it's nice to run everything 
in containers using Docker Compose and run only the part you're working on locally.

To do this, use the provided `kp` script.
```bash
./kp -p [profile]
```
Where `[profile]` can be:
- `f` for frontend local + backend in Docker
- `b` for backend local + frontend in Docker
- `a` for all in Docker
