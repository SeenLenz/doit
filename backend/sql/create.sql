CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username character varying(255) NOT NULL,
  password_hash character varying(255) NOT NULL,
  email character varying(255) NOT NULL,
  first_name character varying(255) NOT NULL,
  last_name character varying(255) NOT NULL,
  registry_date date
);

CREATE TABLE notes (
  note_id serial PRIMARY KEY,
  content character varying(1024)
);

CREATE TABLE tasks (
  task_id serial PRIMARY KEY,
  user_id integer REFERENCES users(user_id),
  note_id integer REFERENCES notes(note_id),
  task_name character varying(255) NOT NULL,
  duration interval
);

CREATE TABLE sub_tasks (
  sub_task_id serial PRIMARY KEY,
  task_id integer REFERENCES tasks(task_id),
  sub_task_name character varying(255) NOT NULL
);

CREATE TABLE states (
  state_id serial PRIMARY KEY,
  user_id integer REFERENCES users(user_id),
  note_id integer REFERENCES notes(note_id),
  start_date date,
  end_date date,
  location character varying(255)
);

CREATE TABLE events (
  event_id serial PRIMARY KEY,
  user_id integer REFERENCES users(user_id),
  note_id integer REFERENCES notes(note_id),
  event_name character varying(255) NOT NULL,
  start_time time,
  end_time time
);