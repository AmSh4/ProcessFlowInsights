# ProcessFlowInsights

## Overview
ProcessFlowInsights is a full-stack web application designed to analyze event logs from business processes, visualize workflow patterns, and suggest automation opportunities. It helps users upload CSV-based event logs (e.g., from task management systems), perform process mining to discover bottlenecks, and generate reports with automation recommendations. This project demonstrates end-to-end development, including frontend UI, backend APIs, testing, and DevOps integration.

Built as a personal project to explore automation technologies, it simulates real-world process analysis scenarios like those in enterprise task flows.

## Features
- **Event Log Upload and Analysis**: Upload CSV files with event data (case_id, activity, timestamp) and automatically analyze process flows using process mining techniques.
- **Visualization Dashboard**: Interactive graphs showing process maps, activity frequencies, and transitions using D3.js integration.
- **Automation Suggestions**: Rule-based recommendations for automating repetitive tasks, with integration to simulate Ansible playbooks for deployment automation.
- **API-Driven Interface**: RESTful APIs for data processing, with full API documentation via Swagger.
- **User Authentication**: Secure login/signup with JWT for multi-user support.
- **Testing Suite**: Unit tests with Jest, E2E tests with Cypress, and API automation tests.
- **DevOps Integration**: Dockerized for easy deployment, Kubernetes manifests for orchestration, and sample cloud configs for AWS/Azure.
- **Real-Time Updates**: WebSocket support for live analysis progress.

## Tech Stack
- **Frontend**: React.js, Redux for state management, JavaScript, HTML5, CSS3 (with Material-UI for responsive design).
- **Backend**: Node.js with Express.js; Python for core analysis scripts (using pandas, networkx for graphs); GoLang microservice for performance-critical log parsing.
- **Database**: MongoDB (via Mongoose) for storing user data and analysis results.
- **Testing**: Jest for unit/integration, Cypress for E2E, Codecept for additional automation, Ansible/Python for test orchestration.
- **DevOps**: Docker, Kubernetes, GitHub Actions (sample workflow), Linux-compatible scripts.
- **Other**: Git for version control, API testing with Postman collections (included), cloud awareness (configs for AWS S3 upload, Azure Functions integration).

## Prerequisites
- Node.js v18+
- Python 3.10+
- Go 1.20+
- MongoDB (local or cloud instance)
- Docker (for containerization)
- Kubernetes (minikube for local testing)

## Setup Instructions
1. **Clone the Repo**:
git clone https://github.com/yourusername/ProcessFlowInsights.git
cd ProcessFlowInsights


2. **Install Dependencies**:
- Frontend:
cd frontend
npm install
- Backend:
cd backend
npm install
- Python Analysis:

cd analysis_scripts
pip install -r requirements.txt

- Go Microservice:

cd go_parser
go mod tidy


3. **Environment Variables**:
Create `.env` in backend root:
MONGO_URI=mongodb://localhost:27017/processflow
JWT_SECRET=your_secret_key
PYTHON_SCRIPT_PATH=../analysis_scripts/analyze.py


4. **Run Locally**:
- Start MongoDB.
- Backend: `cd backend && npm start`
- Frontend: `cd frontend && npm start`
- Go Service: `cd go_parser && go run main.go` (runs on port 8081)
- Analysis: Triggered via API calls.

5. **Testing**:
- Unit/Integration: `cd backend && npm test`
- E2E: `cd frontend && npm run cypress:open`
- API Automation: Run `cd tests && python api_automation.py`

6. **Docker Build & Run**:
docker-compose up

7. **Kubernetes Deployment**:
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml


## Project Structure


## Usage
- Access the app at `http://localhost:3000`.
- Register/login.
- Upload a CSV (sample format: case_id,activity,timestamp).
- View dashboard with graphs and suggestions.
- APIs at `http://localhost:5000/api` (e.g., POST /analyze).

## Contributing
Fork and PR. Issues welcome.

## License
MIT
