# Employee Management System (EMS)

A React-based system for managing employee tasks and performance tracking.

## Quick Start

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Installation

```bash
git clone <repository-url>
cd ems
npm install
npm run dev



```
## Authentication Examples
### Admin Login

Email: admin@example.com
Password: 123

### Employee Login

Email: employee1@example.com
Password: 123

## Features

Admin Dashboard :
Create and assign tasks
Monitor employee performance
View task statistics
Manage employee records

Employee Dashboard:
View assigned tasks
Update task status
Track personal progress
Manage deadlines

## Project Structure

src/
├── components/
│ ├── Auth/
│ │ └── Login.jsx
│ ├── Dash/
│ │ ├── AdminDashboard.jsx
│ │ └── EmpDashboard.jsx
│ └── TaskList/
│ ├── AcceptTask.jsx
│ ├── CompleteTask.jsx
│ └── Failed.jsx
├── context/
│ └── AuthProvider.jsx
└── utils/
└── localStorage.jsx

## Technologies Used

React
Vite
Tailwind CSS
Context API

## License

MIT License
