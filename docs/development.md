# Development

## Requirements

- Node.js 20
- Python 3.11

## Commands

```bash
npm install
npm run dev
npm run check
```

## Local Worker

```bash
pip install -r services/autoscore-worker/requirements.txt
uvicorn app:app --app-dir services/autoscore-worker --reload
```
