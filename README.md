# DevOps Vagrant Lab – Lecture 4

## ✅ VM1: Web Server

- Встановлена ОС: Ubuntu 24.04
- Використовується NAT + forwarded port (8080 → 80)
- Встановлено nginx
- Синхронізована папка: `./shared_folder_vm1`

### 🖼 Скриншот vargrant up:
![vargrant](screenshots/1.png)

---

## ✅ VM2: Private Server

- Статичний приватний IP: `192.168.56.10`
- Provisioning з Bash-скрипта
- Синхронізована папка: `../src/main`

### 🖼 Скриншот vargrantfile:
![vargrantfile](screenshots/2.png)

---

## ✅ VirtualBox started

- Статичний IP: `192.168.1.100`
- nginx відображає custom `index.html`
- Синхронізована папка: `./shared_folder_vm1`

### 🖼 Скриншот started:
![started](screenshots/3.png)

### 🖼 Скриншот started VM1:
![startedVM1](screenshots/4.png)

### 🖼 Скриншот started VM2:
![startedVM2](screenshots/5.png)

### 🖼 Скриншот started VM3:
![startedVM3](screenshots/6.png)

### 🖼 Скриншот running:
![running](screenshots/7.png)

---