# ⚙️ Setup

### ✅ Prerequisites

- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) installed

### 📦 Installation

1. **Install Node.js version**

   ```bash
   nvm install
   ```

   This will install Node.js version defined in `.nvmrc` (lts/jod - Node.js 22.x LTS)

2. **Set as default (optional)**

   ```bash
   nvm alias default lts/jod
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

### 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:check` - Check code formatting with Prettier
- `npm run lint:fix` - Fix code formatting with Prettier
