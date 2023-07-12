use actix_web::{get, post, web::Json, Responder};

#[get("/event/get/{task_id}")]
pub async fn event_get() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}

#[post("/event/post/create")]
pub async fn event_create() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}

#[post("/event/post/update")]
pub async fn event_update() -> impl Responder {
    return Json("Ugugubuugugugagaa".to_string());
}
