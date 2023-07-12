pub struct Task {
    pub task_id: i32,
    pub note_id: i32,
    pub user_id: i32,
    pub task_name: String,
    pub from: sqlx::types::chrono::NaiveDate,
    pub to: sqlx::types::chrono::NaiveDate,
    pub state: bool,
}

pub struct SubTask {
    pub task_id: i32,
    pub sub_task_id: i32,
    pub name: String,
    pub state: bool,
}
