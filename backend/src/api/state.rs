use actix_web::{get, post, web::Json, Responder};

#[get("/state/get/{task_id}")]
pub async fn state_get() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}

#[post("/state/post/create")]
pub async fn state_create() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}

#[post("/state/post/update")]
pub async fn state_update() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}
