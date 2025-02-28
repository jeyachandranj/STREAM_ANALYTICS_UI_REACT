# 📊 STREAM_ANALYTICS_UI_REACT

## 🚀 Overview
The **STREAM_ANALYTICS_UI_REACT** project is a real-time data processing and visualization platform built with **React.js**. It generates random data, streams it using **Kafka with Zookeeper**, stores it in an **SQL database**, and presents insights through dynamic charts.

📡 **Real-time Data Streaming** – Leveraging Kafka for efficient data flow.  
📊 **Interactive Dashboard** – Visualizing key food delivery trends.  
🗄️ **SQL Database Storage** – Ensuring structured and persistent data management.  



https://github.com/user-attachments/assets/f4144bfd-a0dc-4922-8e40-70f92768829f

---

## 🏗️ Tech Stack

### 🌐 Frontend
- ⚛️ **React.js** – Creating an interactive and responsive UI.
- 📊 **Chart.js / Recharts** – Visualizing real-time data with dynamic charts.

### 🖥️ Backend
- 🚀 **Express.js** – Managing server-side logic.
- 🔄 **Kafka & Zookeeper** – Enabling data streaming and coordination.

### 🗄️ Database
- 🗃️ **SQL Database** – Storing structured food delivery data.
- 📈 **Real-time Analytics** – Processing and presenting live data.

---

## 📌 Features
- 📊 **Real-time Data Visualization**
- 📡 **Kafka-based Data Streaming**
- 🗄️ **SQL Storage for Historical Data**
- ⚡ **Scalable Architecture for High Throughput**
- 🚀 **Dynamic & Interactive Dashboard UI**

---

## 🚀 Getting Started

### 📦 Installation
```bash
# Clone the repository
git clone https://github.com/jeyachandranj/FoodDeliveryDashboard.git
cd FoodDeliveryDashboard

# Install dependencies
npm install
```

### 🔧 Backend Setup
```bash
cd server
npm install

# Start the backend server
npm start
```

### 🌍 Frontend Setup
```bash
cd client
npm install

# Start the frontend
npm run dev
```

---

## 🔑 Environment Variables
Create a `.env` file in the backend directory and add the following:
```env
KAFKA_BROKER=your_kafka_broker_url
ZK_HOST=your_zookeeper_host
SQL_DB_URL=your_sql_database_url
```

---


