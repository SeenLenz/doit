// use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

// #[get("/")]
// async fn hello() -> impl Responder {
//     HttpResponse::Ok().body("Hello world!")
// }

// #[post("/echo")]
// async fn echo(req_body: String) -> impl Responder {
//     HttpResponse::Ok().body(req_body)
// }

// async fn manual_hello() -> impl Responder {
//     HttpResponse::Ok().body("Hey there!")
// }

// async fn thjing() -> impl Responder {
//     HttpResponse::NotFound().body("404")
// }

// #[actix_web::main]
// async fn main() -> std::io::Result<()> {
//     HttpServer::new(|| {
//         App::new()
//             .service(hello)
//             .service(echo)
//             .route("/hey", web::get().to(manual_hello))
//             .route("/penis", web::get().to(thjing))
//     })
//     .bind(("127.0.0.1", 8080))?
//     .run()
//     .await
// }
use postgres::{Client, NoTls};

fn main() -> Result<(), postgres::Error> {
    let mut connection = Client::connect("host=127.0.0.1 port=5432 dbname=postgres user=postgres password=root sslmode=prefer connect_timeout=10", NoTls)?;
    
    // Use the client for database operations
    
    Ok(())
}