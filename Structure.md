
    ProcessFlowInsights/
    ├── README.md                  # This file
    ├── docker-compose.yml         # Docker composition
    ├── k8s/                       # Kubernetes manifests
    │   ├── deployment.yaml
    │   └── service.yaml
    ├── frontend/                  # React frontend
    │   ├── public/
    │   │   ├── index.html
    │   │   └── ...
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── Dashboard.js
    │   │   │   ├── UploadForm.js
    │   │   │   ├── ProcessGraph.js
    │   │   │   └── AuthForm.js
    │   │   ├── redux/
    │   │   │   ├── actions.js
    │   │   │   ├── reducers.js
    │   │   │   └── store.js
    │   │   ├── App.js
    │   │   ├── index.js
    │   │   └── styles.css
    │   ├── package.json
    │   ├── cypress/               # Cypress E2E tests
    │   │   ├── integration/
    │   │   │   └── app.spec.js
    │   └── ...
    ├── backend/                   # Node.js backend
    │   ├── controllers/
    │   │   ├── analysisController.js
    │   │   ├── authController.js
    │   │   └── apiDocs.js        # Swagger setup
    │   ├── models/
    │   │   └── User.js
    │   ├── routes/
    │   │   ├── analysisRoutes.js
    │   │   └── authRoutes.js
    │   ├── tests/                 # Jest tests
    │   │   └── analysis.test.js
    │   ├── server.js
    │   ├── package.json
    │   └── .env.example
    ├── analysis_scripts/          # Python for process mining
    │   ├── analyze.py             # Main analysis script
    │   ├── automation_suggest.py  # Automation recommendations
    │   ├── ansible_playbook.yml   # Sample Ansible for automation
    │   ├── requirements.txt
    │   └── test_automation.py     # Python test automation
    ├── go_parser/                 # Go microservice for log parsing
    │   ├── main.go
    │   ├── parser.go
    │   └── go.mod
    ├── tests/                     # Cross-stack tests
    │   ├── api_automation.py      # API testing with Python
    │   └── codecept.config.js     # Codecept config
    └── postman/                   # API testing collections
    
    └── ProcessFlowInsights.postman_collection.json
