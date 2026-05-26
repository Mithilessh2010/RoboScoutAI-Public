FROM python:3.11-slim

WORKDIR /app
COPY services/autoscore-worker/requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt
COPY services/autoscore-worker/app.py services/autoscore-worker/app.py

EXPOSE 8080
CMD ["uvicorn", "app:app", "--app-dir", "services/autoscore-worker", "--host", "0.0.0.0", "--port", "8080"]
