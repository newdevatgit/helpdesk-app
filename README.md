# 🎟️ Helpdesk Ticket Management System

A full-featured Helpdesk Ticket Management System built with **React** and **Tailwind CSS**. It allows users, operation staff, technical team members, and admins to collaborate on issue tracking and resolution through a clean and professional interface.

---

## 🔐 Sign In Flow

- All users must sign in to access any functionality.
- Session is stored using `localStorage` (`isLoggedIn=true`).
- Unauthenticated users are redirected to the sign-in page.

---

## 👥 User Roles and Flows

### 👤 1. End User Flow

- Register or Sign In to the platform.
- Create a new support ticket with title, description, and priority.
- View status of submitted tickets (Pending, In Progress, Solved).
- Receive updates when the ticket is assigned or resolved.

### 🛠 2. Technical Team Flow

- View all tickets assigned to them.
- Update ticket status (e.g., In Progress, Waiting for Info, Resolved).
- Add internal or public notes to communicate with the operations team or end user.
- Manage time tracking and resolution logs.

### 📋 3. Operation Team Flow

- View new tickets submitted by users.
- Assign tickets to relevant technical team members.
- Monitor overall ticket status and SLA compliance.
- Communicate with users to request clarification.

### 👑 4. Admin Flow

- Full dashboard access for all tickets.
- Manage users (view, block/unblock accounts).
- Track performance of the technical and operation teams.
- Generate reports on resolution time, team workload, and feedback.

---

## 🎫 Ticket Lifecycle

1. **User** submits a ticket.
2. **Operations team** reviews and assigns to **technical team**.
3. **Technical team** updates ticket status and adds resolutions.
4. **User** is notified about updates.
5. Ticket is marked as **Resolved** or **Closed**.

---

## 🔧 Technologies Used

- **Frontend**: React, Tailwind CSS, React Router DOM, React Icons
- **State Management**: useState, localStorage, (Redux optional)
- **Form Handling**: react-hook-form (for ticket submission)
- **Auth Simulation**: Basic localStorage login state

---

## 🛠️ Getting Started

### 📦 1. Clone the Repository

```bash
git clone https://github.com/yourusername/helpdesk-app.git
cd helpdesk-app
```

### 🔧 2. Install Dependencies

```bash
npm install
```

### ▶️ 3. Run the App

```bash
npm run dev
```

---

## 🔐 Protected Routes

| Route           | Access Role      | Description                        |
|----------------|------------------|------------------------------------|
| `/signin`       | Public           | Sign in to the platform            |
| `/signup`       | Public           | Create a new user account          |
| `/`             | All Auth Users   | Dashboard overview                 |
| `/new-ticket`   | End User         | Submit new support request         |
| `/my-tickets`   | End User         | View user-submitted tickets        |
| `/assigned`     | Technical Team   | View assigned tickets              |
| `/manage-tickets`| Operation/Admin | Assign and track all tickets       |
| `/admin`        | Admin Only       | Manage users and analytics         |

---

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components (Header, Sidebar, etc.)
├── layouts/         # MainLayout for dashboard structure
├── pages/           # SignIn, SignUp, Dashboard, Tickets, AdminPanel, etc.
├── utils/           # PrivateRoute for auth protection
├── App.jsx          # Route definitions
└── index.css        # Tailwind base styles
```

---

## ✅ Completed Features

- [x] User Authentication Flow (UI-based)
- [x] Ticket Submission Form
- [x] Ticket Listing for Users
- [x] Ticket Assignment Flow (Ops to Tech)
- [x] Role-Based Route Protection
- [x] Basic Layout and Navigation

---

## 🧠 Future Enhancements

- [ ] Integrate backend (Node.js, MongoDB)
- [ ] Add email notifications and activity logs
- [ ] Real-time ticket status updates via sockets or polling
- [ ] Team performance analytics

---

## ✍️ Author

Made with ❤️ by **Arvind Singh**  
📫 Connect on GitHub, LinkedIn, or Twitter for collaborations or suggestions.

---

## 📄 License

This project is licensed under the MIT License — free to use and modify.