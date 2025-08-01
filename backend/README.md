# ReciPick (Backend)

This is the backend for ReciPick, a recipe management application.

## Getting Started

To get started with the ReciPick backend, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pedrohenriquefs9/Recipick
   cd Recipick/backend
   ```

2. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Create the `.env` file**:
    Inside the `backend/` directory, duplicate the file `.env.example` and rename it to `.env`. Then, add your Gemini API key and allowed origins. For example:

    ```text
    GEMINI_API_KEY=your_api_key_here
    ALLOWED_ORIGINS=http://localhost:5173
    GOOGLE_API_KEY=your_google_api_key_here
    CUSTOM_SEARCH_ENGINE_ID=your_ID_search_engine_here
    ```

4. **Start the development server**:

   ```bash
   cd ..
   python -m backend.app
   ```

5. **Access the application**:

   Navigate to `http://localhost:5000` in your web browser to see the backend in action.
