#![feature(prelude_import)]
#[prelude_import]
use std::prelude::rust_2021::*;
#[macro_use]
extern crate std;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
#[allow(non_camel_case_types, missing_docs)]
pub struct hello;
impl ::actix_web::dev::HttpServiceFactory for hello {
    fn register(self, __config: &mut actix_web::dev::AppService) {
        async fn hello() -> impl Responder {
            HttpResponse::Ok().body("Hello world!")
        }
        let __resource = ::actix_web::Resource::new("/")
            .name("hello")
            .guard(::actix_web::guard::Get())
            .to(hello);
        ::actix_web::dev::HttpServiceFactory::register(__resource, __config);
    }
}
#[allow(non_camel_case_types, missing_docs)]
pub struct echo;
impl ::actix_web::dev::HttpServiceFactory for echo {
    fn register(self, __config: &mut actix_web::dev::AppService) {
        async fn echo(req_body: String) -> impl Responder {
            HttpResponse::Ok().body(req_body)
        }
        let __resource = ::actix_web::Resource::new("/echo")
            .name("echo")
            .guard(::actix_web::guard::Post())
            .to(echo);
        ::actix_web::dev::HttpServiceFactory::register(__resource, __config);
    }
}
async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}
async fn thjing() -> impl Responder {
    HttpResponse::NotFound().body("404")
}
fn main() -> std::io::Result<()> {
    <::actix_web::rt::System>::new()
        .block_on(async move {
            {
                HttpServer::new(|| {
                        App::new()
                            .service(hello)
                            .service(echo)
                            .route("/hey", web::get().to(manual_hello))
                            .route("/penis", web::get().to(thjing))
                    })
                    .bind(("127.0.0.1", 8080))?
                    .run()
                    .await
            }
        })
}
