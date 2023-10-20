FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# change direcotry
WORKDIR /code

# pip
COPY ./requirements.txt /code/requirements.txt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt
